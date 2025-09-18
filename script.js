// Login Functions
function showStudentLogin() {
    showScreen('student-login');
}

function showTeacherLogin() {
    showScreen('teacher-login');
}

function handleStudentLogin(event) {
    event.preventDefault();
    
    const username = document.getElementById('student-username').value;
    const password = document.getElementById('student-password').value;
    
    // Show loading state
    const submitBtn = event.target.querySelector('button[type="submit"]');
    const originalContent = submitBtn.innerHTML;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Logging in...';
    submitBtn.disabled = true;
    
    // Simulate login validation
    setTimeout(() => {
        if (username && password) {
            // Successful login
            submitBtn.innerHTML = '<i class="fas fa-check"></i> Success!';
            submitBtn.style.background = '#27ae60';
            
            setTimeout(() => {
                showNotification('Welcome back, ' + username + '!', 'success');
                showScreen('student-dashboard');
                
                // Reset form
                document.getElementById('student-username').value = '';
                document.getElementById('student-password').value = '';
                submitBtn.innerHTML = originalContent;
                submitBtn.disabled = false;
                submitBtn.style.background = '';
            }, 1000);
        } else {
            // Failed login
            submitBtn.innerHTML = '<i class="fas fa-times"></i> Failed';
            submitBtn.style.background = '#e74c3c';
            
            setTimeout(() => {
                showNotification('Please enter valid credentials', 'error');
                submitBtn.innerHTML = originalContent;
                submitBtn.disabled = false;
                submitBtn.style.background = '';
            }, 1500);
        }
    }, 1500);
}

function handleTeacherLogin(event) {
    event.preventDefault();
    
    const username = document.getElementById('teacher-username').value;
    const password = document.getElementById('teacher-password').value;
    
    // Show loading state
    const submitBtn = event.target.querySelector('button[type="submit"]');
    const originalContent = submitBtn.innerHTML;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Logging in...';
    submitBtn.disabled = true;
    
    // Simulate login validation
    setTimeout(() => {
        if (username && password) {
            // Successful login
            submitBtn.innerHTML = '<i class="fas fa-check"></i> Success!';
            submitBtn.style.background = '#27ae60';
            
            setTimeout(() => {
                showNotification('Welcome back, ' + username + '!', 'success');
                showScreen('teacher-dashboard');
                
                // Reset form
                document.getElementById('teacher-username').value = '';
                document.getElementById('teacher-password').value = '';
                submitBtn.innerHTML = originalContent;
                submitBtn.disabled = false;
                submitBtn.style.background = '';
            }, 1000);
        } else {
            // Failed login
            submitBtn.innerHTML = '<i class="fas fa-times"></i> Failed';
            submitBtn.style.background = '#e74c3c';
            
            setTimeout(() => {
                showNotification('Please enter valid credentials', 'error');
                submitBtn.innerHTML = originalContent;
                submitBtn.disabled = false;
                submitBtn.style.background = '';
            }, 1500);
        }
    }, 1500);
}

// Screen Navigation with Realistic Transitions
function showScreen(screenId) {
    // Add loading transition
    const currentScreen = document.querySelector('.screen.active');
    const targetScreen = document.getElementById(screenId);
    
    if (!targetScreen) return;
    
    // Add fade out effect to current screen
    if (currentScreen) {
        currentScreen.style.opacity = '0';
        currentScreen.style.transform = 'translateX(-20px)';
    }
    
    // Wait for fade out, then switch screens
    setTimeout(() => {
        // Hide all screens
        const screens = document.querySelectorAll('.screen');
        screens.forEach(screen => {
            screen.classList.remove('active');
            screen.style.opacity = '';
            screen.style.transform = '';
        });
        
        // Show selected screen with fade in effect
        targetScreen.classList.add('active');
        targetScreen.style.opacity = '0';
        targetScreen.style.transform = 'translateX(20px)';
        
        // Fade in animation
        setTimeout(() => {
            targetScreen.style.opacity = '1';
            targetScreen.style.transform = 'translateX(0)';
        }, 50);
        
        // Initialize screen-specific features
        initializeScreenFeatures(screenId);
        
    }, 300);
}

// Initialize screen-specific features
function initializeScreenFeatures(screenId) {
    switch(screenId) {
        case 'analytics-screen':
            setTimeout(initializeCharts, 100);
            break;
        case 'qr-generator':
            initializeQRGenerator();
            break;
        case 'student-schedule':
            initializeSchedule();
            break;
        case 'student-dashboard':
            initializeStudentDashboard();
            break;
        case 'teacher-dashboard':
            initializeTeacherDashboard();
            break;
        case 'class-management':
            initializeClassManagement();
            break;
        case 'student-tasks':
            initializeStudentTasks();
            break;
    }
}

// IoT Check-in Function
function checkIn() {
    // Simulate IoT check-in process
    const button = document.querySelector('.floating-btn');
    const originalContent = button.innerHTML;
    
    // Show loading state
    button.innerHTML = '<i class="fas fa-spinner fa-spin"></i><span>Checking in...</span>';
    button.disabled = true;
    
    // Simulate API call
    setTimeout(() => {
        // Show success state
        button.innerHTML = '<i class="fas fa-check"></i><span>Checked In!</span>';
        button.style.background = '#27ae60';
        
        // Reset after 2 seconds
        setTimeout(() => {
            button.innerHTML = originalContent;
            button.disabled = false;
            button.style.background = '#27ae60';
        }, 2000);
        
        // Show notification
        showNotification('Successfully checked in via IoT device!', 'success');
    }, 1500);
}

// Notification System
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <i class="fas fa-${type === 'success' ? 'check-circle' : 'info-circle'}"></i>
        <span>${message}</span>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#27ae60' : '#2980b9'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
        z-index: 10000;
        display: flex;
        align-items: center;
        gap: 0.5rem;
        font-family: 'Poppins', sans-serif;
        font-weight: 500;
        transform: translateX(100%);
        transition: transform 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Chart Initialization
function initializeCharts() {
    // Attendance Trend Chart
    const attendanceCtx = document.getElementById('attendanceChart');
    if (attendanceCtx) {
        new Chart(attendanceCtx, {
            type: 'line',
            data: {
                labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
                datasets: [{
                    label: 'Attendance %',
                    data: [75, 78, 82, 80, 85, 88],
                    borderColor: '#2980b9',
                    backgroundColor: 'rgba(41, 128, 185, 0.1)',
                    borderWidth: 3,
                    fill: true,
                    tension: 0.4,
                    pointBackgroundColor: '#2980b9',
                    pointBorderColor: '#fff',
                    pointBorderWidth: 2,
                    pointRadius: 6
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        max: 100,
                        ticks: {
                            callback: function(value) {
                                return value + '%';
                            }
                        },
                        grid: {
                            color: 'rgba(0, 0, 0, 0.1)'
                        }
                    },
                    x: {
                        grid: {
                            color: 'rgba(0, 0, 0, 0.1)'
                        }
                    }
                }
            }
        });
    }
    
    // Courses Distribution Chart
    const coursesCtx = document.getElementById('coursesChart');
    if (coursesCtx) {
        new Chart(coursesCtx, {
            type: 'doughnut',
            data: {
                labels: ['AI/ML', 'Data Science', 'Web Dev', 'Soft Skills'],
                datasets: [{
                    data: [35, 25, 25, 15],
                    backgroundColor: [
                        '#2980b9',
                        '#27ae60',
                        '#f1c40f',
                        '#e74c3c'
                    ],
                    borderWidth: 0,
                    cutout: '60%'
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'bottom',
                        labels: {
                            padding: 20,
                            usePointStyle: true,
                            font: {
                                family: 'Poppins',
                                size: 12
                            }
                        }
                    }
                }
            }
        });
    }
}

// Smooth scrolling for better UX
function smoothScrollTo(element) {
    element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
}

// Add loading animation for better UX
function addLoadingAnimation() {
    const style = document.createElement('style');
    style.textContent = `
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
        }
        
        .screen.active {
            animation: fadeIn 0.5s ease-out;
        }
        
        .student-card, .stat-card, .chart-card {
            animation: fadeIn 0.6s ease-out;
        }
        
        .floating-btn {
            animation: pulse 2s infinite;
        }
        
        @keyframes pulse {
            0% { box-shadow: 0 4px 20px rgba(39, 174, 96, 0.3); }
            50% { box-shadow: 0 6px 30px rgba(39, 174, 96, 0.5); }
            100% { box-shadow: 0 4px 20px rgba(39, 174, 96, 0.3); }
        }
    `;
    document.head.appendChild(style);
}

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    addLoadingAnimation();
    
    // Add click handlers for better interactivity
    const studentCards = document.querySelectorAll('.student-card');
    studentCards.forEach(card => {
        card.addEventListener('click', function() {
            this.style.transform = 'scale(1.02)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 200);
        });
    });
    
    // Add hover effects for table rows
    const tableRows = document.querySelectorAll('tbody tr');
    tableRows.forEach(row => {
        row.addEventListener('mouseenter', function() {
            this.style.backgroundColor = '#f8f9fa';
        });
        row.addEventListener('mouseleave', function() {
            this.style.backgroundColor = 'transparent';
        });
    });
    
    // Initialize tooltips for better UX
    const buttons = document.querySelectorAll('.btn, .btn-nav, .btn-small');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-1px)';
        });
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
});

// QR Code Scanning Function
function scanQR() {
    const button = document.querySelector('.qr-scan-btn');
    const originalContent = button.innerHTML;
    
    // Show loading state with progress
    button.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Scanning QR Code...';
    button.disabled = true;
    
    // Simulate QR scan process with realistic steps
    setTimeout(() => {
        button.innerHTML = '<i class="fas fa-search"></i> Detecting proximity...';
    }, 500);
    
    setTimeout(() => {
        button.innerHTML = '<i class="fas fa-check-circle"></i> Validating attendance...';
    }, 1000);
    
    setTimeout(() => {
        // Show success state
        button.innerHTML = '<i class="fas fa-check"></i> Attendance Marked!';
        button.style.background = '#27ae60';
        
        // Reset after 2 seconds
        setTimeout(() => {
            button.innerHTML = originalContent;
            button.disabled = false;
            button.style.background = '#27ae60';
        }, 2000);
        
        // Show notification
        showNotification('Attendance marked successfully via QR scan!', 'success');
        
        // Update attendance metrics
        updateAttendanceMetrics();
    }, 1500);
}

// Update Attendance Metrics
function updateAttendanceMetrics() {
    const metrics = document.querySelectorAll('.metric-value');
    if (metrics.length >= 3) {
        // Simulate real-time updates
        const overallValue = Math.min(100, parseInt(metrics[0].textContent) + 1);
        const weekValue = Math.min(100, parseInt(metrics[1].textContent) + 2);
        
        metrics[0].textContent = overallValue + '%';
        metrics[1].textContent = weekValue + '%';
        metrics[2].textContent = 'Present';
    }
}

// Schedule Functions
function showDaySchedule(period) {
    const buttons = document.querySelectorAll('.schedule-btn');
    buttons.forEach(btn => btn.classList.remove('active'));
    
    if (period === 'today') {
        buttons[0].classList.add('active');
        // Show today's schedule
        updateScheduleDisplay('today');
    } else {
        buttons[1].classList.add('active');
        // Show weekly schedule
        updateScheduleDisplay('week');
    }
}

function updateScheduleDisplay(period) {
    // This would typically fetch real schedule data
    console.log(`Displaying ${period} schedule`);
}

function initializeSchedule() {
    // Set current date/time for schedule
    const now = new Date();
    const timeSlots = document.querySelectorAll('.time-slot');
    
    timeSlots.forEach(slot => {
        const timeElement = slot.querySelector('.time');
        const statusElement = slot.querySelector('.status');
        
        if (timeElement && statusElement) {
            const timeText = timeElement.textContent;
            const currentTime = now.getHours() * 100 + now.getMinutes();
            
            // Parse time slot (e.g., "09:00 - 10:30")
            const [startTime, endTime] = timeText.split(' - ');
            const startHour = parseInt(startTime.split(':')[0]) * 100 + parseInt(startTime.split(':')[1]);
            const endHour = parseInt(endTime.split(':')[0]) * 100 + parseInt(endTime.split(':')[1]);
            
            // Update status based on current time
            if (currentTime >= startHour && currentTime <= endHour) {
                statusElement.textContent = '🟢 In Progress';
                statusElement.className = 'status present';
            } else if (currentTime < startHour) {
                statusElement.textContent = '⏰ Upcoming';
                statusElement.className = 'status upcoming';
            } else {
                statusElement.textContent = '✅ Completed';
                statusElement.className = 'status present';
            }
        }
    });
}

// Task Management Functions
function startTask(taskElement) {
    const taskBtn = taskElement.querySelector('.task-btn.start');
    const originalText = taskBtn.textContent;
    const taskInfo = taskElement.querySelector('.task-info h5');
    const taskName = taskInfo ? taskInfo.textContent : 'Task';
    
    // Show progress states
    taskBtn.textContent = 'Starting...';
    taskBtn.disabled = true;
    taskBtn.style.background = '#f1c40f';
    
    // Add progress bar
    const progressBar = document.createElement('div');
    progressBar.className = 'task-progress';
    progressBar.innerHTML = `
        <div class="progress-bar">
            <div class="progress-fill"></div>
        </div>
        <span class="progress-text">0%</span>
    `;
    taskElement.appendChild(progressBar);
    
    // Simulate realistic task progress
    let progress = 0;
    const progressInterval = setInterval(() => {
        progress += Math.random() * 15 + 5; // Random progress between 5-20%
        if (progress > 100) progress = 100;
        
        const progressFill = progressBar.querySelector('.progress-fill');
        const progressText = progressBar.querySelector('.progress-text');
        
        progressFill.style.width = progress + '%';
        progressText.textContent = Math.round(progress) + '%';
        
        // Update button text based on progress
        if (progress < 30) {
            taskBtn.textContent = 'Getting started...';
        } else if (progress < 60) {
            taskBtn.textContent = 'In progress...';
        } else if (progress < 90) {
            taskBtn.textContent = 'Almost done...';
        } else {
            taskBtn.textContent = 'Finalizing...';
        }
        
        if (progress >= 100) {
            clearInterval(progressInterval);
            
            setTimeout(() => {
                taskBtn.textContent = 'Completed!';
                taskBtn.style.background = '#27ae60';
                progressBar.remove();
                
                // Add completion animation
                taskElement.style.background = '#d5f4e6';
                taskElement.style.borderLeft = '4px solid #27ae60';
                
                setTimeout(() => {
                    taskBtn.textContent = originalText;
                    taskBtn.disabled = false;
                    taskBtn.style.background = '#27ae60';
                    taskElement.style.background = '';
                    taskElement.style.borderLeft = '';
                }, 2000);
                
                showNotification(`${taskName} completed successfully!`, 'success');
            }, 500);
        }
    }, 200);
}

function scheduleTaskLater(taskElement) {
    showNotification('Task scheduled for later', 'info');
}

// QR Code Generation Functions
function initializeQRGenerator() {
    // Set default date/time to current
    const now = new Date();
    const dateTimeInput = document.getElementById('classDateTime');
    if (dateTimeInput) {
        // Format: YYYY-MM-DDTHH:MM
        const formattedDateTime = now.toISOString().slice(0, 16);
        dateTimeInput.value = formattedDateTime;
    }
}

function generateQR() {
    const classSelect = document.getElementById('classSelect');
    const dateTimeInput = document.getElementById('classDateTime');
    const durationInput = document.getElementById('classDuration');
    const generateBtn = document.querySelector('.generate-qr-btn');
    
    if (!classSelect || !dateTimeInput || !durationInput) return;
    
    const className = classSelect.options[classSelect.selectedIndex].text;
    const dateTime = new Date(dateTimeInput.value);
    const duration = durationInput.value;
    
    // Show loading state
    const originalBtnContent = generateBtn.innerHTML;
    generateBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Generating QR Code...';
    generateBtn.disabled = true;
    
    // Simulate generation process
    setTimeout(() => {
        generateBtn.innerHTML = '<i class="fas fa-cog fa-spin"></i> Processing class data...';
    }, 500);
    
    setTimeout(() => {
        generateBtn.innerHTML = '<i class="fas fa-qrcode"></i> Creating QR pattern...';
    }, 1000);
    
    setTimeout(() => {
        generateBtn.innerHTML = '<i class="fas fa-check"></i> QR Code Ready!';
        generateBtn.disabled = false;
        
        // Update QR info display
        document.getElementById('qrClass').textContent = className;
        document.getElementById('qrDate').textContent = dateTime.toLocaleDateString();
        document.getElementById('qrTime').textContent = dateTime.toLocaleTimeString();
        document.getElementById('qrDuration').textContent = duration + ' minutes';
        
        // Generate QR code (simulated)
        const qrDisplay = document.getElementById('qrCodeDisplay');
        qrDisplay.innerHTML = `
            <div class="qr-generated">
                <div class="qr-pattern">
                    <div class="qr-square"></div>
                    <div class="qr-square"></div>
                    <div class="qr-square"></div>
                    <div class="qr-square"></div>
                    <div class="qr-square"></div>
                    <div class="qr-square"></div>
                    <div class="qr-square"></div>
                    <div class="qr-square"></div>
                    <div class="qr-square"></div>
                </div>
                <p>QR Code Generated</p>
                <small>Class: ${className}</small>
            </div>
        `;
        
        // Add QR pattern styles
        const style = document.createElement('style');
        style.textContent = `
            .qr-pattern {
                display: grid;
                grid-template-columns: repeat(3, 1fr);
                gap: 2px;
                width: 200px;
                height: 200px;
                background: white;
                border: 2px solid #2c3e50;
                animation: qrAppear 0.5s ease-out;
            }
            .qr-square {
                background: #2c3e50;
                animation: squareAppear 0.3s ease-out;
            }
            .qr-square:nth-child(odd) {
                background: white;
            }
            .qr-generated {
                text-align: center;
            }
            .qr-generated p {
                margin: 1rem 0 0.5rem;
                font-weight: 600;
                color: #2c3e50;
            }
            .qr-generated small {
                color: #7f8c8d;
            }
            @keyframes qrAppear {
                from { opacity: 0; transform: scale(0.8); }
                to { opacity: 1; transform: scale(1); }
            }
            @keyframes squareAppear {
                from { opacity: 0; }
                to { opacity: 1; }
            }
        `;
        document.head.appendChild(style);
        
        showNotification('QR Code generated successfully!', 'success');
        
        // Reset button after 2 seconds
        setTimeout(() => {
            generateBtn.innerHTML = originalBtnContent;
        }, 2000);
        
    }, 1500);
}

function downloadQR() {
    showNotification('QR Code download started', 'info');
    // In a real implementation, this would generate and download the actual QR code image
}

// Class Management Functions
function viewClassDetails(classId) {
    showNotification(`Viewing details for ${classId}`, 'info');
    // In a real implementation, this would show detailed class information
}

function generateClassQR(classId) {
    showNotification(`Generating QR for ${classId}`, 'info');
    // Navigate to QR generator with pre-filled class info
    showScreen('qr-generator');
    
    // Pre-fill the form
    setTimeout(() => {
        const classSelect = document.getElementById('classSelect');
        if (classSelect) {
            classSelect.value = classId;
        }
    }, 100);
}

function exportStudentData() {
    showNotification('Exporting student data...', 'info');
    // Simulate export process
    setTimeout(() => {
        showNotification('Student data exported successfully!', 'success');
    }, 2000);
}

function viewAttendanceReports() {
    showNotification('Opening attendance reports...', 'info');
    showScreen('analytics-screen');
}

function manageStudentProfiles() {
    showNotification('Opening student profile management...', 'info');
    // In a real implementation, this would open a student management interface
}

// View Reports Function
function viewReports() {
    showNotification('Opening reports...', 'info');
    showScreen('analytics-screen');
}

// Screen-specific initialization functions
function initializeStudentDashboard() {
    // Simulate loading student data
    showNotification('Loading your dashboard...', 'info');
    
    // Update attendance metrics with animation
    setTimeout(() => {
        const metrics = document.querySelectorAll('.metric-value');
        metrics.forEach((metric, index) => {
            metric.style.opacity = '0';
            setTimeout(() => {
                metric.style.opacity = '1';
                metric.style.transform = 'scale(1.1)';
                setTimeout(() => {
                    metric.style.transform = 'scale(1)';
                }, 200);
            }, index * 200);
        });
    }, 500);
}

function initializeTeacherDashboard() {
    // Simulate loading teacher data
    showNotification('Loading teaching overview...', 'info');
    
    // Animate stat cards
    setTimeout(() => {
        const statCards = document.querySelectorAll('.stat-card');
        statCards.forEach((card, index) => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, index * 150);
        });
    }, 300);
}

function initializeClassManagement() {
    // Simulate loading class data
    showNotification('Loading class information...', 'info');
    
    // Animate class cards
    setTimeout(() => {
        const classCards = document.querySelectorAll('.class-card');
        classCards.forEach((card, index) => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(30px)';
            setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, index * 200);
        });
    }, 400);
}

function initializeStudentTasks() {
    // Simulate loading AI recommendations
    showNotification('Generating personalized tasks...', 'info');
    
    // Animate task categories
    setTimeout(() => {
        const taskCategories = document.querySelectorAll('.task-category');
        taskCategories.forEach((category, index) => {
            category.style.opacity = '0';
            category.style.transform = 'translateX(-30px)';
            setTimeout(() => {
                category.style.opacity = '1';
                category.style.transform = 'translateX(0)';
            }, index * 300);
        });
    }, 600);
}

// Enhanced navigation with breadcrumbs
function updateBreadcrumb(currentScreen) {
    const breadcrumb = document.querySelector('.breadcrumb');
    if (breadcrumb) {
        const screenNames = {
            'login-screen': 'Login',
            'student-dashboard': 'Student Dashboard',
            'student-schedule': 'My Schedule',
            'student-tasks': 'Suggested Tasks',
            'teacher-dashboard': 'Teacher Dashboard',
            'qr-generator': 'QR Generator',
            'class-management': 'Class Management',
            'analytics-screen': 'Analytics & Reports'
        };
        
        breadcrumb.textContent = screenNames[currentScreen] || 'SmartEdu';
    }
}

// Add realistic loading states
function showLoadingState(element, message = 'Loading...') {
    const originalContent = element.innerHTML;
    element.innerHTML = `
        <div class="loading-state">
            <i class="fas fa-spinner fa-spin"></i>
            <span>${message}</span>
        </div>
    `;
    
    return () => {
        element.innerHTML = originalContent;
    };
}

// Enhanced button interactions
function addRealisticButtonEffects() {
    const buttons = document.querySelectorAll('.btn, .btn-nav, .action-btn, .class-btn, .data-btn');
    
    buttons.forEach(button => {
        // Add ripple effect
        button.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.cssText = `
                position: absolute;
                width: ${size}px;
                height: ${size}px;
                left: ${x}px;
                top: ${y}px;
                background: rgba(255, 255, 255, 0.3);
                border-radius: 50%;
                transform: scale(0);
                animation: ripple 0.6s linear;
                pointer-events: none;
            `;
            
            this.style.position = 'relative';
            this.style.overflow = 'hidden';
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
        
        // Add hover effects
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
            this.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.15)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '';
        });
    });
}

// Add ripple animation CSS
function addRippleAnimation() {
    const style = document.createElement('style');
    style.textContent = `
        @keyframes ripple {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
        
        .loading-state {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            color: #2980b9;
            font-weight: 500;
        }
        
        .screen {
            transition: opacity 0.3s ease, transform 0.3s ease;
        }
        
        .metric-value, .stat-card, .class-card, .task-category {
            transition: opacity 0.3s ease, transform 0.3s ease;
        }
    `;
    document.head.appendChild(style);
}

// Add event listeners for task buttons
document.addEventListener('DOMContentLoaded', function() {
    // Add ripple animation
    addRippleAnimation();
    
    // Add realistic button effects
    addRealisticButtonEffects();
    
    // Add click handlers for task buttons
    const taskStartButtons = document.querySelectorAll('.task-btn.start');
    taskStartButtons.forEach(button => {
        button.addEventListener('click', function() {
            const taskItem = this.closest('.task-item');
            startTask(taskItem);
        });
    });
    
    const taskLaterButtons = document.querySelectorAll('.task-btn.later');
    taskLaterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const taskItem = this.closest('.task-item');
            scheduleTaskLater(taskItem);
        });
    });
    
    // Add realistic page load animation
    setTimeout(() => {
        const loginScreen = document.getElementById('login-screen');
        if (loginScreen && loginScreen.classList.contains('active')) {
            loginScreen.style.opacity = '0';
            loginScreen.style.transform = 'translateY(20px)';
            setTimeout(() => {
                loginScreen.style.opacity = '1';
                loginScreen.style.transform = 'translateY(0)';
            }, 100);
        }
    }, 200);
});

// Export functions for potential module use
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        showScreen,
        checkIn,
        showNotification,
        initializeCharts,
        scanQR,
        updateAttendanceMetrics,
        showDaySchedule,
        initializeSchedule,
        startTask,
        scheduleTaskLater,
        generateQR,
        downloadQR,
        viewClassDetails,
        generateClassQR,
        exportStudentData,
        viewAttendanceReports,
        manageStudentProfiles,
        viewReports
    };
}