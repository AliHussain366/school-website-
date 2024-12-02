// Sample users (Admin and Teacher) for login simulation
const users = {
  admin: { username: "admin", password: "admin123", role: "admin" },
  teacher: { username: "teacher", password: "teacher123", role: "teacher" }
};

// Function to handle the login process
function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const errorMessage = document.getElementById("error-message");

  // Check if user exists and password is correct
  if (users.admin.username === username && users.admin.password === password) {
    // Admin login successful
    document.getElementById("login-page").style.display = "none";
    document.getElementById("admin-dashboard").style.display = "block";
  } else if (users.teacher.username === username && users.teacher.password === password) {
    // Teacher login successful
    document.getElementById("login-page").style.display = "none";
    document.getElementById("teacher-dashboard").style.display = "block";
  } else {
    // Invalid login
    errorMessage.innerText = "Invalid Username or Password";
  }
}

// Function to handle logout
function logout() {
  document.getElementById("admin-dashboard").style.display = "none";
  document.getElementById("teacher-dashboard").style.display = "none";
  document.getElementById("login-page").style.display = "block";
  document.getElementById("username").value = '';
  document.getElementById("password").value = '';
}

// Function to simulate marking attendance (Admin and Teacher)
function markAttendance() {
  const selectedClass = document.getElementById("student-class").value;
  alert(`Attendance marked for Class ${selectedClass}`);
}

// Function to submit grades
function submitGrade() {
  const studentName = document.getElementById("student-for-grades").value;
  const grade = document.getElementById("grade-for-student").value;
  alert(`Grade for ${studentName}: ${grade}`);
}

// Function to schedule an exam
function scheduleExam() {
  const selectedClass = document.getElementById("exam-class").value;
  const subject = document.getElementById("exam-subject").value;
  const examDate = document.getElementById("exam-date").value;
  alert(`Exam Scheduled for Class ${selectedClass}: ${subject} on ${examDate}`);
}

// Function to send a message (for Admin)
function sendMessage() {
  const recipient = document.getElementById("recipient").value;
  const message = document.getElementById("message").value;
  alert(`Message sent to ${recipient}: ${message}`);
}

// Function to add a book (Library Management)
function addBook() {
  const bookTitle = document.getElementById("book-title").value;
  const bookAuthor = document.getElementById("book-author").value;
  alert(`Book Added: ${bookTitle} by ${bookAuthor}`);
}

// Function to remove a book (Library Management)
function removeBook() {
  const bookTitle = document.getElementById("book-title").value;
  alert(`Book Removed: ${bookTitle}`);
}

// Function to add an event (Event and Holiday Management)
function addEvent() {
  const eventName = document.getElementById("event-name").value;
  const eventDate = document.getElementById("event-date").value;
  const eventType = document.getElementById("event-type").value;
  alert(`Event Added: ${eventName} on ${eventDate} (Type: ${eventType})`);
}

// Function to send notifications (Admin)
function sendNotification() {
  const notificationType = document.getElementById("notification-type").value;
  const notificationMessage = document.getElementById("notification-message").value;
  alert(`Notification sent to ${notificationType}: ${notificationMessage}`);
}

// Function to generate an attendance report (Admin)
function generateAttendanceReport() {
  const reportType = document.getElementById("report-type").value;
  const startDate = document.getElementById("start-date").value;
  const endDate = document.getElementById("end-date").value;
  alert(`Generating ${reportType} attendance report from ${startDate} to ${endDate}`);
}

// Function to set permissions (Admin)
function setPermissions() {
  const role = document.getElementById("role").value;
  const permissions = document.getElementById("permissions").value;
  alert(`Permissions for ${role} set to: ${permissions}`);
}

// Function to mark teacher attendance
function markTeacherAttendance() {
  const teacherClass = document.getElementById("teacher-class").value;
  alert(`Teacher Attendance marked for Class ${teacherClass}`);
}

// Function to submit teacher grades
function submitTeacherGrade() {
  const teacherClass = document.getElementById("teacher-class-for-grades").value;
  const grade = document.getElementById("teacher-grade-for-student").value;
  alert(`Grade submitted for Class ${teacherClass}: ${grade}`);
}

// Function to assign homework
function assignHomework() {
  const homeworkTitle = document.getElementById("homework-title").value;
  const homeworkDetails = document.getElementById("homework-details").value;
  const homeworkDueDate = document.getElementById("homework-due-date").value;
  alert(`Homework Assigned: ${homeworkTitle} due on ${homeworkDueDate}`);
}
