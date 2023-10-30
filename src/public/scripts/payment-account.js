const profileBtn = document.querySelector(".profileBtn")
const historyBtn = document.querySelector(".historyBtn");
const changePasswordBtn = document.querySelector(".changePasswordBtn");

const redirect2profiletView = () => {
    window.location.href ="http://127.0.0.1:3000/account"
}
const redirect2HistoryView = () => {
  window.location.href = "http://127.0.0.1:3000/account/booking-history";
}
const redirect2changePasswordView = () => {
  window.location.href = "http://127.0.0.1:3000/account/change-password"
}
profileBtn.addEventListener("click",redirect2profiletView)
historyBtn.addEventListener("click", redirect2HistoryView);
changePasswordBtn.addEventListener("click", redirect2changePasswordView);

const logoutBtn = document.querySelector('.logoutBtn')

const redirect2LogOutView = () => {
  window.location.href = "http://127.0.0.1:3000/register"
}

logoutBtn.addEventListener("click", redirect2LogOutView)


//
const addBankAccountpopup = document.querySelector('.modal');
const addBankAccountBtn = document.querySelector('.addBankAccountBtn');

const onClickAddBankAccountBtn = () => {
    addBankAccountpopup.style.display = 'block';
};
addBankAccountBtn.addEventListener('click', onClickAddBankAccountBtn);