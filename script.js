document.addEventListener('scroll', () => {
    const features = document.querySelectorAll('.feature');
    const scrollY = window.scrollY;

    features.forEach((feature, index) => {
        if (scrollY > feature.offsetTop - window.innerHeight + 100) {
            feature.style.animationDelay = `${index * 0.3}s`;
            feature.classList.add('visible');
        }
    });
});
document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', () => {
        const faqItem = button.parentElement;
        const answer = faqItem.querySelector('.faq-answer');

        // Toggle the active class on the question
        faqItem.classList.toggle('active');

        // If the faq item is active, expand the answer, otherwise collapse it
        if (faqItem.classList.contains('active')) {
            answer.style.maxHeight = answer.scrollHeight + 'px';
        } else {
            answer.style.maxHeight = null;
        }
    });
});
