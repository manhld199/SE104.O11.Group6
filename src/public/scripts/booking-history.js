const profileBtn = document.querySelector(".profileBtn")
const accountPaymentBtn = document.querySelector(".accountPaymentBtn");
const changePasswordBtn = document.querySelector(".changePasswordBtn");

const redirect2profiletView = () => {
    window.location.href = "/account/information"
}

const redirect2accountPaymentView = () => {
    window.location.href = "/account/payment"
}

const redirect2changePasswordView = () => {
    window.location.href = "/account/change-password"
}
profileBtn.addEventListener("click", redirect2profiletView)
accountPaymentBtn.addEventListener("click", redirect2accountPaymentView);
changePasswordBtn.addEventListener("click", redirect2changePasswordView);

const logoutBtn = document.querySelector('.logoutBtn');

const redirect2LogOutView = () => {
    window.location.href = "/auth/logout"
};

logoutBtn.addEventListener("click", redirect2LogOutView);

// Lay nut danh gia va nut popup
const reviewpopup = document.querySelector('.modal');
const reviewBtn = document.querySelector('.reviewBtn');

const onClickReviewBtn = () => {
    reviewpopup.style.display = 'block';
};
reviewBtn.addEventListener('click', onClickReviewBtn);