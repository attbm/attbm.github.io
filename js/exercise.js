
    // Dữ liệu câu hỏi và câu trả lời
    var questions = [
        {
            question: "Ý tưởng phương pháp sắp xếp chọn trực tiếp?",
            options: [
                "A. Chọn phần tử bé nhất xếp vào vị trí thứ nhất bằng cách đổi chổ phần tử bé nhất với phần tử thứ nhất; Tương tự đối với phần tử nhỏ thứ hai,ba....", 
                "B. Phân đoạn dãy thành nhiều dãy con và lần lượt trộn hai dãy con thành dãy lớn hơn, cho đến khi thu được dãy ban đầu đã được sắp xếp.", 
                "C. Lần lượt lấy phần tử của danh sách chèn vị trí thích hợp của nó trong dãy.",
                "D. Bắt đầu từ cuối dãy đến đầu dãy, ta lần lượt so sánh hai phần tử kế tiếp nhau, nếu phần tử nào bé hơn được cho lên vị trí trên."
            ], answer: 0
        },
        {
            question: "Ý tưởng phương pháp sắp xếp nổi bọt?",
            options: [
                "A. Chọn phần tử bé nhất xếp vào vị trí thứ nhất bằng cách đổi chổ phần tử bé nhất với phần tử thứ nhất; Tương tự đối với phần tử nhỏ thứ hai,ba....", 
                "B. Phân đoạn dãy thành nhiều dãy con và lần lượt trộn hai dãy con thành dãy lớn hơn, cho đến khi thu được dãy ban đầu đã được sắp xếp.", 
                "C. Lần lượt lấy phần tử của danh sách chèn vị trí thích hợp của nó trong dãy.",
                "D. Bắt đầu từ cuối dãy đến đầu dãy, ta lần lượt so sánh hai phần tử kế tiếp nhau, nếu phần tử nào bé hơn được cho lên vị trí trên."
            ], answer: 3
        },
        {
            question: "Ý tưởng phương pháp sắp xếp chèn trực tiếp?",
            options: [
                "A. Chọn phần tử bé nhất xếp vào vị trí thứ nhất bằng cách đổi chổ phần tử bé nhất với phần tử thứ nhất; Tương tự đối với phần tử nhỏ thứ hai,ba....", 
                "B. Phân đoạn dãy thành nhiều dãy con và lần lượt trộn hai dãy con thành dãy lớn hơn, cho đến khi thu được dãy ban đầu đã được sắp xếp.", 
                "C. Lần lượt lấy phần tử của danh sách chèn vị trí thích hợp của nó trong dãy.",
                "D. Bắt đầu từ cuối dãy đến đầu dãy, ta lần lượt so sánh hai phần tử kế tiếp nhau, nếu phần tử nào bé hơn được cho lên vị trí trên."
            ], answer: 2
        },
        {
            question: "Thuật toán sắp xếp nổi bọt sắp xếp danh sách bằng cách nào?",
            options: [
                "A. Thay thế.", 
                "B. Thay đổi.", 
                "C. Hoán đổi.",
                "D. Cả A, B và C."
            ], answer: 2
        },
        {
            question: "Sau vòng lặp thứ nhất của thuật toán sắp xếp chọn, phương án nào đúng?",
            options: [
                "A. Phần tử có giá trị nhỏ nhất trong dãy được tìm thấy và đổi chỗ cho phần tử đứng đầu dãy.", 
                "B. Phần tử có giá trị lớn nhất trong dãy được tìm thấy và đổi chỗ cho phần tử đứng đầu dãy.", 
                "C. Các phần tử liền kề được hoán đổi.", 
                "D. Phần tử có giá trị nhỏ nhất sẽ đổi vị trí cho phần tử cuối dãy."
            ], answer: 0
        },
        {
            question: "Thuật toán sắp xếp nổi bọt sắp xếp danh sách bằng cách hoán đổi các phần tử liền kề bao nhiêu lần?",
            options: [
                "A. Một lần.", 
                "B. Hai lần.", 
                "C. Mười lần.", 
                "D. Nhiều lần."
            ], answer: 3
        },
        {
            question: "Tìm phần tử nhỏ nhất trong dãy và đổi chỗ phần tử này với phần tử đầu tiên của dãy chưa được sắp xếp là ý tưởng của thuật toán nào?",
            options: [
                "A. Nổi bọt.", 
                "B. Chọn."
            ], answer: 1
        },
        {
            question: "Trong thuật toán sắp xếp nổi bọt, ta thực hiện hoán đổi giá trị các phần tử liền kề khi nào?",
            options: [
                "A. Giá trị của chúng tăng.", 
                "B. Giá trị của chúng giảm.", 
                "C. Giá trị của chúng không đúng thứ tự.", 
                "D. Giá trị của chúng không bằng nhau."
            ], answer: 3
        },
        {
            question: "Các nhiệm vụ để thực hiện việc sắp xếp gồm:",
            options: [
                "A. So sánh.", 
                "B. Đổi chỗ.", 
                "C. So sánh và đổi chỗ.", 
                "D. Đổi chỗ và xoá."
            ], answer: 2
        },
        {
            question: "Nếu sử dụng thuật toán sắp xếp chọn để sắp xếp dãy số 8, 22, 7, 19, 5 theo thứ tự tăng dần thì số lần thực hiện thao tác hoán đổi giá trị trong vòng lặp thứ nhất là:",
            options: [
                "A. 2.", 
                "A. 3.", 
                "A. 4.", 
                "A. 5."
            ], answer: 2
        },
        
        // Thêm câu hỏi và câu trả lời ở đây
    ];
    
    var currentQuestion = 0;
    var score = 0;
    
    $(document).ready(function() {
        displayQuestion();
        
        $("#submit").click(function() {
            checkAnswer();
        });
    });
    
    function displayQuestion() {
        $("#question").text("Câu " + (currentQuestion + 1) + ": " + questions[currentQuestion].question);
        $("#options").empty();
        for (let i = 0; i < questions[currentQuestion].options.length; i++) {
            $("#options").append("<li class='quiz'><input type='radio' name='option' class='radio' value='" + i + "'>" + questions[currentQuestion].options[i] + "</li>");
        }
    }
    
    function checkAnswer() {
        var userAnswer = $("input[name='option']:checked").val();
        if (userAnswer == questions[currentQuestion].answer) {
            score++;
        }
        currentQuestion++;
        if (currentQuestion < questions.length) {
            displayQuestion();
        } else {
            displayResult();
        }
    }
    
    function displayResult() {
        $("#quiz").hide();
        $("#result").text("Điểm số của bạn là: " + score + "/" + questions.length);
    }
