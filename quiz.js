// دالة للتحقق من الإجابة
function checkAnswer() {
    // تحديد الإجابة الصحيحة
    const correctAnswer = "4";

    // الحصول على الإجابة التي اختارها المستخدم
    const userAnswer = document.querySelector('input[name="quiz"]:checked')?.value;

    // الحصول على العنصر الذي يعرض الملاحظات
    const feedback = document.getElementById("feedback");

    // التحقق من الإجابة
    if (userAnswer === correctAnswer) {
        feedback.textContent = "Correct! Well done.";
    } else {
        feedback.textContent = "That's incorrect. Try again!";
    }
}

// إضافة Event Listener للزر "Submit Answer" ليقوم باستدعاء الدالة عند الضغط عليه
document.getElementById("submit-answer").addEventListener("click", checkAnswer);
