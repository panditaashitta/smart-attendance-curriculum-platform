# Smart Attendance & Curriculum Platform

A comprehensive, IoT-powered educational platform that automates attendance tracking, provides real-time insights, and offers AI-driven task suggestions for students and teachers. Features QR code automation, proximity-based attendance, and intelligent scheduling.

## 🎨 Design Features

### Color Palette
- **Primary Blue**: #2980b9
- **Success Green**: #27ae60
- **Warning Yellow**: #f1c40f
- **Danger Red**: #e74c3c
- **Dark Blue**: #2c3e50
- **Text Color**: #34495e

### Typography
- **Primary Font**: Poppins (Google Fonts)
- **Heading Color**: #2c3e50
- **Body Text**: #34495e

## 📱 Screens Overview

### 1. Login/Welcome Screen
- **Background**: Gradient from #2980b9 to #6dd5fa
- **Features**:
  - Modern glassmorphism design
  - Education icon with graduation cap
  - Two login options: Student & Teacher
  - Responsive button animations

### 2. Student Dashboard
- **Background**: Clean white
- **Features**:
  - Real-time attendance status with LIVE indicator
  - QR scan button for automated attendance
  - Quick action buttons for schedule and tasks
  - Attendance metrics (Overall, This Week, Today)

### 3. Student Schedule/Timetable
- **Background**: Light grey (#f8f9fa)
- **Features**:
  - Interactive weekly timetable
  - Free period task suggestions
  - Real-time class status updates
  - Daily routine generation tips
  - Smart time management suggestions

### 4. Student Tasks Page
- **Background**: Light grey (#f8f9fa)
- **Features**:
  - AI-powered task suggestions
  - Categorized tasks (Technical, Academic, Soft Skills)
  - Task duration estimates
  - Interactive task management

### 5. Teacher Dashboard
- **Background**: Clean white
- **Features**:
  - Teaching overview statistics
  - Quick access to QR generator and class management
  - Real-time attendance monitoring

### 6. QR Code Generator
- **Background**: Light grey (#f8f9fa)
- **Features**:
  - Dynamic QR code generation
  - Class information form
  - QR code display and download
  - Usage instructions

### 7. Class Management
- **Background**: Light grey (#f8f9fa)
- **Features**:
  - Class cards with attendance summaries
  - Student data export functionality
  - QR generation for each class
  - Real-time attendance tracking

### 8. Analytics/Reports Screen
- **Background**: White
- **Features**:
  - Interactive attendance trend line chart
  - Course distribution pie chart
  - Statistics grid with key metrics
  - Tagline: "Smarter Attendance, Sharper Learning"

## 🚀 Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- No server setup required - runs entirely in the browser

### Installation
1. Clone or download the project files
2. Open `index.html` in your web browser
3. That's it! The application is ready to use

### File Structure
```
sih/
├── index.html          # Main HTML file with all screens
├── styles.css          # Complete CSS styling
├── script.js           # JavaScript for interactivity
└── README.md           # This file
```

## 🎯 Key Features

### 🤖 Automated Attendance System
- **QR Code + Proximity**: Automates attendance using QR scanning and proximity detection
- **Real-time Updates**: No delays or confusion for faculty/students
- **Error Prevention**: Eliminates manual attendance errors
- **Class Time Saving**: Streamlines attendance process

### 📅 Smart Scheduling & Task Management
- **Dynamic Timetable**: Shows current and upcoming classes with real-time status
- **Free Period Suggestions**: AI-powered task recommendations during breaks
- **Interest-based Tasks**: Matches student goals and long-term planning
- **Daily Routine Generation**: Improves time management automatically

### 👨‍🏫 Teacher Tools
- **QR Code Generation**: Create attendance QR codes for any class
- **Class Management**: Comprehensive class overview with student data
- **Real-time Monitoring**: Live attendance tracking and updates
- **Data Export**: Secure student data export and reporting

### 🔒 Security & Privacy
- **Secure Data Storage**: Privacy-friendly data handling
- **Easy Reporting**: Simple data export and analytics
- **Access Control**: Separate student and teacher interfaces

### 📱 Device Compatibility
- **Simple Device Support**: Works on basic smartphones and tablets
- **Responsive Design**: Optimized for all screen sizes
- **Offline Capability**: Core features work without constant internet

### Responsive Design
- **Desktop**: Full-featured layout with all elements visible
- **Tablet**: Optimized grid layouts and navigation
- **Mobile**: Stacked layouts with touch-friendly buttons

## 🎨 Design Philosophy

### Modern UI/UX Principles
- **Glassmorphism**: Modern translucent design elements
- **Card-based Layout**: Clean, organized information display
- **Consistent Spacing**: 8px grid system for visual harmony
- **Smooth Animations**: Subtle transitions and hover effects
- **Accessibility**: High contrast colors and readable fonts

### Educational Theme
- **Icons**: Font Awesome education and technology icons
- **Colors**: Professional blue and green palette
- **Typography**: Clean, modern Poppins font family
- **Imagery**: Graduation caps, books, charts, and brain icons

## 🔧 Customization

### Adding New Screens
1. Add a new `<div>` with class `screen` in `index.html`
2. Style the screen in `styles.css`
3. Add navigation logic in `script.js`

### Modifying Colors
Update the CSS custom properties in `styles.css`:
```css
:root {
    --primary-blue: #2980b9;
    --success-green: #27ae60;
    --warning-yellow: #f1c40f;
    --danger-red: #e74c3c;
}
```

### Adding New Charts
1. Add a canvas element in the HTML
2. Initialize the chart in the `initializeCharts()` function
3. Style the chart container in CSS

## 📊 Data Integration

The application is designed to easily integrate with real data sources:

### Student Data
- Replace static student names with dynamic data
- Connect attendance percentages to real attendance records
- Implement real-time status calculations

### IoT Integration
- Replace the simulated check-in with actual IoT device communication
- Add device status monitoring
- Implement real-time attendance updates

### Analytics
- Connect charts to real attendance data
- Implement course recommendation algorithms
- Add more detailed reporting features

## 🌟 Future Enhancements

- **Real-time Updates**: WebSocket integration for live data
- **User Authentication**: Secure login system
- **Database Integration**: Backend API connections
- **Mobile App**: React Native or Flutter version
- **Advanced Analytics**: Machine learning insights
- **Multi-language Support**: Internationalization

## 📱 Browser Compatibility

- ✅ Chrome 80+
- ✅ Firefox 75+
- ✅ Safari 13+
- ✅ Edge 80+

## 🤝 Contributing

This is a frontend prototype designed for demonstration purposes. Feel free to:
- Fork the project
- Add new features
- Improve the design
- Optimize performance
- Add accessibility features

## 📄 License

This project is open source and available under the MIT License.

---

**Built with ❤️ for Smart Education**

*Smarter Attendance, Sharper Learning*