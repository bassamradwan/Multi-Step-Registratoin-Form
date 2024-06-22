// document.addEventListener("DOMContentLoaded", function() {
//     const nextButtons = document.querySelectorAll(".btn-next");
//     const prevButtons = document.querySelectorAll(".btn-prev");
//     const formSteps = document.querySelectorAll(".form-step");

//     let formStepIndex = 0;

//     nextButtons.forEach(button => {
//         button.addEventListener("click", () => {
//             formStepIndex++;
//             updateFormSteps();
//         });
//     });

//     prevButtons.forEach(button => {
//         button.addEventListener("click", () => {
//             formStepIndex--;
//             updateFormSteps();
//         });
//     });

//     function updateFormSteps() {
//         formSteps.forEach((formStep, index) => {
//             formStep.classList.remove("form-step-active");
//             if (index === formStepIndex) {
//                 formStep.classList.add("form-step-active");
//             }
//         });
//     }
// });

document.addEventListener("DOMContentLoaded", function() {
    const accountTypeStep = document.getElementById('accountTypeStep');
    const userRegistrationStep = document.getElementById('userRegistrationStep');
    const companySteps = [
        document.getElementById('companyStep1'),
        document.getElementById('companyStep2'),
        document.getElementById('companyStep3')
    ];
    const btnAccountType = document.getElementById('btn-accountType');
    const nextButtons = document.querySelectorAll(".btn-next");
    const prevButtons = document.querySelectorAll(".btn-prev");

    let companyStepIndex = 0;

    btnAccountType.addEventListener('click', () => {
        const accountType = document.querySelector('input[name="accountType"]:checked').value;
        accountTypeStep.classList.remove('form-step-active');
        if (accountType === 'personal') {
            userRegistrationStep.classList.add('form-step-active');
        } else {
            companySteps[0].classList.add('form-step-active');
        }
    });

    nextButtons.forEach(button => {
        button.addEventListener("click", () => {
            companySteps[companyStepIndex].classList.remove('form-step-active');
            companyStepIndex++;
            companySteps[companyStepIndex].classList.add('form-step-active');
        });
    });

    prevButtons.forEach(button => {
        button.addEventListener("click", () => {
            companySteps[companyStepIndex].classList.remove('form-step-active');
            companyStepIndex--;
            companySteps[companyStepIndex].classList.add('form-step-active');
        });
    });
});
