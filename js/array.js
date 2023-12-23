class ArrayItem {
    constructor(animationContainer, left, top, value, backgroundColor, size = 15) {
        this.animationContainer = animationContainer;
        this.size = size;
        this.backgroundColor = backgroundColor;
        this.value = value;

        this.element = $('<div>', {
            class: 'array-item',
            text: value
        }).css({
            width: size + 'px',
            height: size + 'px',
            'background-color': backgroundColor,
            'border-radius': '50%',
            'text-align': 'center',
            'line-height': size + 'px',
            'font-size': '12px',
            position: 'absolute',
            left: left + 'px',
            top: top + 'px'
        });

        this.animationContainer.append(this.element);
    }

    moveTo(left, top) {
        return new Promise((resolve) => {
            this.element.animate({ left: left + 'px', top: top + 'px' }, 1000, resolve);
        });
    }
}

class CustomArray {
    constructor(animationContainer, values) {
        this.animationContainer = animationContainer;
        this.values = values;
        this.itemSize = 20;
        this.spacing = 0;

        this.arrayItems = [];
        this.indexLabels = []; // Mảng quản lý indexLabel
        this.containerWidth = 0;

        // Thêm pointer_i và pointer_j là hình ảnh
        this.pointer_i = $('<img>', {
            class: 'pointer pointer-i',
            src: 'img/pointer_i.png'
        });
        this.pointer_j = $('<img>', {
            class: 'pointer pointer-j',
            src: 'img/pointer_j.png'
        });

        // Khởi tạo danh sách ArrayItem
        this.initArrayItems();
        // Thêm pointer_i và pointer_j vào animationContainer
        this.animationContainer.append(this.pointer_i);
        this.animationContainer.append(this.pointer_j);
    }

    initArrayItems() {
        this.containerWidth = this.animationContainer.width();
        this.spacing = (this.containerWidth - this.values.length * this.itemSize) / (this.values.length + 1);

        // Xóa toàn bộ nội dung cũ trong animationContainer
        this.animationContainer.empty();

        // Tạo và thêm các ArrayItem vào animationContainer và indexLabel vào mảng indexLabels
        for (let i = 0; i < this.values.length; i++) {
            const left = this.spacing * (i + 1) + i * this.itemSize;
            const top = (this.animationContainer.height() - this.itemSize) / 2;
            const value = this.values[i];
            const backgroundColor = '#3498db';

            const arrayItem = new ArrayItem(this.animationContainer, left, top, value.toString(), backgroundColor, this.itemSize);
            this.arrayItems.push(arrayItem);

            // Tạo indexLabel và lưu vào mảng indexLabels
            const indexLabel = $('<div>', {
                class: 'index-label',
                text: i
            });
            this.indexLabels.push(indexLabel);

            // Đặt vị trí của indexLabel
            indexLabel.css({
                position: 'absolute',
                top: top - this.itemSize * 2, // Đặt phía trên arrayItem
                left: left + this.itemSize / 3,
            });

            // Thêm indexLabel vào animationContainer
            this.animationContainer.append(indexLabel);
        }

        // Cập nhật độ rộng của animationContainer
        this.animationContainer.css('width', this.containerWidth + 'px');
    }

    // Phương thức di chuyển pointer_i đến arrayItem có vị trí index
    movePointer_i(index) {
        if (index >= 0 && index < this.arrayItems.length) {
            const arrayItem = this.arrayItems[index];
            const top = arrayItem.element.position().top + this.itemSize + 10;;
            const left = arrayItem.element.position().left;
            return new Promise(resolve => {
                this.pointer_i.animate({ left: left + 'px', top: top + 'px' }, 1000, resolve);
            });
        }
    }

    // Phương thức di chuyển pointer_j đến arrayItem có vị trí index
    movePointer_j(index) {
        if (index >= 0 && index < this.arrayItems.length) {
            const arrayItem = this.arrayItems[index];
            const top = arrayItem.element.position().top - this.itemSize * 2.5; // Đặt phía trên arrayItem
            const left = arrayItem.element.position().left;
            //this.moveTo(top,arrayItem.element.position().left);
            return new Promise((resolve) => {
                this.pointer_j.animate({ left: left + 'px', top: top + 'px' }, 1000, resolve);
            });
        }
    }

    async swapAnimation(index1, index2) {
        const aI1 = this.arrayItems[index1];
        const aI2 = this.arrayItems[index2];
        const left1 = aI1.element.position().left;
        const top1 = aI1.element.position().top;
        const left2 = aI2.element.position().left;
        const top2 = aI2.element.position().top;

        const aI1_move1 = aI1.moveTo(left1, top1 - this.itemSize); // lên
        const aI2_move1 = aI2.moveTo(left2, top2 + this.itemSize); // xuống
        const aI1_move2 = aI1.moveTo(left2, top1 - this.itemSize); //sang phải
        const aI2_move2 = aI2.moveTo(left1, top2 + this.itemSize); //sang trái
        const aI1_move3 = aI1.moveTo(left2, top2); //xuống lại
        const aI2_move3 = aI2.moveTo(left1, top1); //lên lại

        // Cập nhật vị trí của pointers sau khi hoàn thành hoạt cảnh
        await Promise.all([aI1_move1, aI2_move1]);
        await Promise.all([aI1_move2, aI2_move2]);
        await Promise.all([aI1_move3, aI2_move3]);
        //Move xong thì đổi chỗ
        let temp = this.arrayItems[index1];
        this.arrayItems[index1] = this.arrayItems[index2];
        this.arrayItems[index2] = temp;
    }
}//End CustomArray class

async function runAlgorithmStepByStep() {
    const customArray = new CustomArray($('#animation_container'), [5, 3, 1, 4, 2]);
    const algorithmSteps = bubbleSortSteps(customArray); // Tạo danh sách các bước thuật toán

    for (const step of algorithmSteps) {
        await step(); // Chờ cho đến khi bước hiện tại hoàn thành
    }
}

async function bubbleSortSteps(customArray, onStepComplete) {
    const n = customArray.values.length;
    for (let i = 0; i < n - 1; i++) {
        await customArray.movePointer_i(i);

        for (let j = 0; j < n - i - 1; j++) {
            await customArray.movePointer_j(j);

            if (customArray.arrayItems[j].value > customArray.arrayItems[j + 1].value) {
                await customArray.swapAnimation(j, j + 1);
            }

            // Check if paused before proceeding to the next iteration
            if (isPaused) {
                return;
            }
        }

        // Gọi callback để thông báo rằng bước hiện tại đã hoàn thành
        onStepComplete();

        // Check if paused before proceeding to the next iteration
        if (isPaused) {
            return;
        }
    }
}

async function bubbleSort(customArray) {
    const n = customArray.values.length;
    for (let i = 0; i < n - 1; i++) {
        // Di chuyển pointer_i và pointer_j tới vị trí hiện tại của i và j
        const moveIPromise = new Promise(resolve => {
        // Thực hiện swapAnimation
            customArray.movePointer_i(i).then(() => {
                // Gọi resolve khi animation hoàn thành
                console.log('await hoàn thành');
                resolve();
            });
        });
        // Chờ đợi swapPromise hoàn thành trước khi tiếp tục
        await moveIPromise;
        for (let j = 0; j < n - i - 1; j++) {
            // Di chuyển pointer_i và pointer_j tới vị trí hiện tại của i và j
            const moveJPromise = new Promise(resolve => {
                // Thực hiện swapAnimation
                    customArray.movePointer_j(j).then(() => {
                        // Gọi resolve khi animation hoàn thành
                        console.log('await hoàn thành');
                        resolve();
                    });
            });
            // Chờ đợi swapPromise hoàn thành trước khi tiếp tục
            await moveJPromise;

            // So sánh giá trị và thực hiện swapAnimation
            if (customArray.arrayItems[j].value > customArray.arrayItems[j + 1].value) {
                // Sử dụng Promise để chờ đợi animation hoàn thành
                const swapPromise = new Promise(resolve => {
                    // Thực hiện swapAnimation
                    customArray.swapAnimation(j, j + 1).then(() => {
                        // Gọi resolve khi animation hoàn thành
                        console.log('await hoàn thành');
                        resolve();
                    });
                });

                // Chờ đợi swapPromise hoàn thành trước khi tiếp tục
                await swapPromise;
            }
        }
    }
}

async function interchangeSort(customArray) {
    const n = customArray.values.length;
    for (let i = 0; i < n - 1; i++) {
            // Di chuyển pointer_i và pointer_j tới vị trí hiện tại của i và j
            const moveIPromise = new Promise(resolve => {
            // Thực hiện swapAnimation
                customArray.movePointer_i(i).then(() => {
                    // Gọi resolve khi animation hoàn thành
                    console.log('await move i hoàn thành');
                    resolve();
                });
        });
        // Chờ đợi swapPromise hoàn thành trước khi tiếp tục
        await moveIPromise;
        for (let j = i + 1; j < n; j++) {
            // Di chuyển pointer_i và pointer_j tới vị trí hiện tại của i và j
            const moveJPromise = new Promise(resolve => {
                // Thực hiện swapAnimation
                    customArray.movePointer_j(j).then(() => {
                        // Gọi resolve khi animation hoàn thành
                        console.log('await move j hoàn thành');
                        resolve();
                    });
            });
            // Chờ đợi swapPromise hoàn thành trước khi tiếp tục
            await moveJPromise;
            

            // So sánh giá trị và thực hiện swapAnimation
            if (customArray.arrayItems[i].value > customArray.arrayItems[j].value) {
                // Sử dụng Promise để chờ đợi animation hoàn thành
                const swapPromise = new Promise(resolve => {
                    // Thực hiện swapAnimation
                    customArray.swapAnimation(i, j).then(() => {
                        // Gọi resolve khi animation hoàn thành
                        console.log('await awap hoàn thành');
                        resolve();
                    });
                });

                // Chờ đợi swapPromise hoàn thành trước khi tiếp tục
                await swapPromise;
            }
        }
    }
}
    async function testAnimation(customArray) {
        const n = customArray.values.length;
        for (let i = 0; i < n; i++) {
            const swapPromise = new Promise(resolve => {
                // Thực hiện swapAnimation
                customArray.movePointer_i(i).then(() => {
                    // Gọi resolve khi animation hoàn thành
                    console.log('await hoàn thành');
                    resolve();
                });
            });
            // Chờ đợi swapPromise hoàn thành trước khi tiếp tục
            await swapPromise;
        }
    }