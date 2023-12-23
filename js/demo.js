// Hàm giả định làm việc với API
function fetchData() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const data = { message: "Dữ liệu từ máy chủ" };
        resolve(data); // Dữ liệu được trả về thành công
        // reject(new Error("Lỗi khi tải dữ liệu")); // Để simulating lỗi
      }, 2000);
    });
  }
  
  // Sử dụng Async và Await để gọi fetchData một cách đồng bộ
  async function fetchDataAsync() {
    try {
      console.log("Bắt đầu tải dữ liệu...");
      const result = await fetchData(); // Chờ cho đến khi fetchData hoàn thành
      console.log("Dữ liệu đã được tải thành công:", result.message);
    } catch (error) {
      console.error("Đã xảy ra lỗi:", error.message);
    }
  }
  
  // Gọi hàm fetchDataAsync
  fetchDataAsync();