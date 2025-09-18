# GitHub Deployment Guide

## 🚀 Deploy Smart Attendance & Curriculum Platform to GitHub

### Step 1: Create GitHub Repository

1. Go to [GitHub.com](https://github.com) and sign in
2. Click the "+" icon in the top right corner
3. Select "New repository"
4. Fill in the details:
   - **Repository name**: `smart-attendance-curriculum-platform`
   - **Description**: `IoT-powered educational platform with QR attendance and AI task suggestions`
   - **Visibility**: Public (for GitHub Pages)
   - **Initialize**: Don't check any boxes (we'll add files manually)

### Step 2: Initialize Git Repository

Open terminal/command prompt in your project folder and run:

```bash
# Initialize git repository
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: Smart Attendance & Curriculum Platform"

# Add remote repository (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/smart-attendance-curriculum-platform.git

# Push to GitHub
git push -u origin main
```

### Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on "Settings" tab
3. Scroll down to "Pages" section
4. Under "Source", select "Deploy from a branch"
5. Choose "main" branch and "/ (root)" folder
6. Click "Save"

### Step 4: Access Your Live Site

Your platform will be available at:
```
https://YOUR_USERNAME.github.io/smart-attendance-curriculum-platform
```

### Step 5: Custom Domain (Optional)

If you have a custom domain:
1. In repository Settings > Pages
2. Add your domain in "Custom domain" field
3. Add a `CNAME` file to your repository root with your domain name

## 📁 Project Structure

```
smart-attendance-curriculum-platform/
├── index.html          # Main application file
├── styles.css          # All CSS styling
├── script.js           # JavaScript functionality
├── README.md           # Project documentation
├── package.json        # Project metadata
├── .gitignore         # Git ignore rules
└── deploy.md          # This deployment guide
```

## 🔄 Updating Your Site

To update your deployed site:

```bash
# Make your changes to files
# Then commit and push
git add .
git commit -m "Update: Describe your changes"
git push origin main
```

GitHub Pages will automatically rebuild and deploy your changes within a few minutes.

## 🛠️ Local Development

To run locally for testing:

```bash
# Using Python (if installed)
python -m http.server 8000

# Using Node.js (if installed)
npx http-server

# Then visit: http://localhost:8000
```

## 📱 Features Deployed

✅ **Student Features:**
- Real-time attendance dashboard
- Interactive schedule with free period suggestions
- AI-powered task recommendations
- QR code scanning for attendance

✅ **Teacher Features:**
- QR code generation for classes
- Class management with student data
- Real-time attendance monitoring
- Data export functionality

✅ **Platform Features:**
- Responsive design for all devices
- Smooth page transitions
- Realistic loading states
- Interactive animations

## 🎯 Next Steps

1. **Customize**: Update `package.json` with your details
2. **Test**: Verify all features work on the live site
3. **Share**: Share the GitHub Pages URL with users
4. **Monitor**: Check GitHub Pages deployment status in repository Settings

## 🆘 Troubleshooting

**Site not loading?**
- Check GitHub Pages status in repository Settings
- Ensure all files are committed and pushed
- Wait 5-10 minutes for deployment to complete

**Changes not showing?**
- Clear browser cache
- Check if files were properly committed
- Verify GitHub Pages is enabled

**Need help?**
- Check GitHub Pages documentation
- Review repository Settings > Pages section
- Ensure repository is public for free GitHub Pages