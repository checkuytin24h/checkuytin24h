// Hàm tra cứu GDV
document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("traCuuForm");
    if(form){
        form.addEventListener("submit", function(e){
            e.preventDefault();
            const keyword = document.getElementById("keyword").value.trim().toLowerCase();
            fetch('data/gdv.json')
              .then(res => res.json())
              .then(data => {
                  const resultDiv = document.getElementById("result");
                  const found = data.find(item =>
                      item.zalo.toLowerCase().includes(keyword) ||
                      item.facebook.toLowerCase().includes(keyword) ||
                      item.telegram.toLowerCase().includes(keyword)
                  );
                  if(found){
                      resultDiv.innerHTML = `
                          <div class="feature-card">
                            <h3>Người này đã cọc tại CheckUyTin24H</h3>
                            <p>Họ tên: ${found.name}</p>
                            <p>Số tiền cọc: ${found.amount} VNĐ</p>
                            <p>Ngày cọc: ${found.date}</p>
                          </div>`;
                  }else{
                      resultDiv.innerHTML = `
                          <div class="feature-card">
                            <h3>Chưa có dữ liệu</h3>
                            <p>Hãy cẩn thận trước khi giao dịch!</p>
                          </div>`;
                  }
              });
        });
    }
});