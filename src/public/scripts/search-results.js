// // Mặc định, hiển thị giá trị ban đầu
// priceOutput.textContent = `VND ${priceRange.min} - VND ${priceRange.value}`;

// Lấy danh sách tất cả các thành phần search-results__filter__item
const filterItems = document.querySelectorAll('.search-results__filter__item');

// Lặp qua từng thành phần và thêm sự kiện click
filterItems.forEach(item => {
    item.addEventListener('click', () => {
        // Đặt lại màu nền, màu chữ và font weight của tất cả các thành phần về trạng thái gốc
        filterItems.forEach(originalItem => {
            originalItem.style.backgroundColor = ''; // Đặt lại màu nền
            originalItem.style.color = ''; // Đặt lại màu chữ
            originalItem.style.fontWeight = ''; // Đặt lại font weight
        });

        // Thiết lập màu nền, màu chữ và font weight của thành phần hiện tại
        item.style.backgroundColor = 'orange'; // Màu cam
        item.style.color = 'white'; // Màu trắng
        item.style.fontWeight = '500'; // Font weight 500
    });
});

var dropdownButtons = document.querySelectorAll(".dropdown-button");

document.body.addEventListener("click", function (event) {
    var target = event.target;
    if (target.classList.contains("dropdown-button")) {
        var dropdownContent = target.nextElementSibling;
        if (dropdownContent.style.display === "block") {
            dropdownContent.style.display = "none";
        } else {
            // Đóng rồi mới mở cái mới
            closeAllDropdowns();
            dropdownContent.style.display = "block";
        }
    } else if (!target.classList.contains("dropdown-content")) {
        // Đóng hết khi bấm ra ngoài
        closeAllDropdowns();
    }
});

// Đóng hết
function closeAllDropdowns() {
    var dropdownContents = document.querySelectorAll(".dropdown-content");
    dropdownContents.forEach(function (content) {
        content.style.display = "none";
    });
}

// Mặc định chọn bộ lọc theo "Giá"
const defaultSelectedItem = document.getElementById('filter__item-price');
defaultSelectedItem.click();

// Lấy các phần tử cần tương tác
const extendContent = document.getElementById('extend-content');
const toggleExtend = document.getElementById('toggle-extend');
const hiddenCheckboxes = document.querySelectorAll('.form-check.hidden');
let isExpanded = false;

// Lắng nghe sự kiện click trên nút "Hiển thị tất cả" và "Ấn bớt"
toggleExtend.addEventListener('click', function (e) {
    e.preventDefault();

    // Nếu đang ẩn, thì hiển thị tất cả
    if (!isExpanded) {
        hiddenCheckboxes.forEach(item => {
            item.classList.remove('hidden');
        });

        // Thay đổi nội dung và biểu tượng của nút
        toggleExtend.textContent = 'Ấn bớt';
        extendContent.querySelector('span').textContent = 'expand_less';

        isExpanded = true;
    } else {
        // Nếu đang hiển thị tất cả, thì ẩn bớt
        hiddenCheckboxes.forEach(item => {
            item.classList.add('hidden');
        });

        // Thay đổi nội dung và biểu tượng của nút
        toggleExtend.textContent = 'Hiển thị tất cả';
        extendContent.querySelector('span').textContent = 'expand_more';

        isExpanded = false;
    }
});