// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');

    navToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
        });
    });

    // Animate skill bars when they come into view
    const skillBars = document.querySelectorAll('.skill-progress');
    
    const animateSkillBars = () => {
        skillBars.forEach(bar => {
            const barPosition = bar.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (barPosition < screenPosition) {
                const width = bar.getAttribute('data-width');
                bar.style.width = width + '%';
                bar.style.setProperty('--target-width', width + '%');
            }
        });
    };
    
    // Initial check
    animateSkillBars();
    
    // Check on scroll
    window.addEventListener('scroll', animateSkillBars);
    
    // Skill item hover effects
    const skillItems = document.querySelectorAll('.skill-item');
    skillItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.borderLeftColor = '#e74c3c';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.borderLeftColor = 'var(--primary-color)';
        });
    });
    
    // Tool items click effect
    const toolItems = document.querySelectorAll('.tool-item');
    toolItems.forEach(item => {
        item.addEventListener('click', function() {
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'translateY(-2px)';
            }, 150);
        });
    });

    setupContactForm();

});

// Contact Form Validation and Submission
function setupContactForm() {
    const form = document.getElementById('contactForm');
    if (!form) return;
    
    const submitBtn = form.querySelector('.submit-btn');
    const btnText = submitBtn.querySelector('.btn-text');
    const btnLoading = submitBtn.querySelector('.btn-loading');
    const formSuccess = document.getElementById('formSuccess');
    
    form.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        if (validateForm()) {
            await submitForm();
        }
    });
    
    function validateForm() {
        let isValid = true;
        const fields = {
            name: {
                element: document.getElementById('name'),
                error: document.getElementById('nameError'),
                rules: [(value) => value.trim().length >= 2 || 'Name must be at least 2 characters long']
            },
            email: {
                element: document.getElementById('email'),
                error: document.getElementById('emailError'),
                rules: [
                    (value) => value.trim() !== '' || 'Email is required',
                    (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) || 'Please enter a valid email address'
                ]
            },
            subject: {
                element: document.getElementById('subject'),
                error: document.getElementById('subjectError'),
                rules: [(value) => value !== '' || 'Please select a subject']
            },
            message: {
                element: document.getElementById('message'),
                error: document.getElementById('messageError'),
                rules: [(value) => value.trim().length >= 10 || 'Message must be at least 10 characters long']
            }
        };
        
        Object.keys(fields).forEach(fieldName => {
            const field = fields[fieldName];
            const value = field.element.value;
            let fieldValid = true;
            
            // Clear previous errors
            field.error.textContent = '';
            field.element.classList.remove('error');
            
            // Run validation rules
            for (let rule of field.rules) {
                const result = rule(value);
                if (result !== true) {
                    field.error.textContent = result;
                    field.element.classList.add('error');
                    fieldValid = false;
                    break;
                }
            }
            
            if (!fieldValid) {
                isValid = false;
            }
        });
        
        return isValid;
    }
    
    async function submitForm() {
        // Show loading state
        btnText.style.display = 'none';
        btnLoading.style.display = 'inline-flex';
        submitBtn.disabled = true;
        
        try {
            // Simulate form submission (replace with actual submission logic)
            await new Promise(resolve => setTimeout(resolve, 2000));
            
            // Hide form and show success message
            form.style.display = 'none';
            formSuccess.style.display = 'block';
            
            // Reset form after successful submission
            form.reset();
            
        } catch (error) {
            console.error('Form submission error:', error);
            alert('There was an error sending your message. Please try again.');
        } finally {
            // Reset button state
            btnText.style.display = 'inline';
            btnLoading.style.display = 'none';
            submitBtn.disabled = false;
        }
    }
    
    // Real-time validation
    const inputs = form.querySelectorAll('input, select, textarea');
    inputs.forEach(input => {
        input.addEventListener('blur', () => {
            validateForm();
        });
        
        input.addEventListener('input', () => {
            // Clear error state on input
            const errorElement = document.getElementById(input.name + 'Error');
            if (errorElement) {
                errorElement.textContent = '';
                input.classList.remove('error');
            }
        });
    });
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});