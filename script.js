function doiMauNgauNhien() {
    // 1. Tạo ra một danh sách mã màu hex đẹp mắt
    const danhSachMau = [
        '#FF6B6B', '#4ECDC4', '#45AAF2', '#A55EEA', 
        '#F7B731', '#26DE81', '#FF2E93', '#FA8231'
    ];
    
    // 2. Lấy ngẫu nhiên một màu trong danh sách trên
    const viTriNgauNhien = Math.floor(Math.random() * danhSachMau.length);
    const mauDuocChon = danhSachMau[viTriNgauNhien];
    
    // 3. Thay đổi màu nền của toàn bộ trang web sang màu vừa chọn
    document.body.style.backgroundColor = mauDuocChon;
}