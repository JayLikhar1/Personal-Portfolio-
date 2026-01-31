# 🚀 Deployment Guide

This guide covers deploying your Personal Portfolio to Vercel.

## 📋 Prerequisites

Before deploying, make sure you have:
- ✅ A Vercel account ([sign up here](https://vercel.com))
- ✅ Your GitHub repository pushed and up-to-date
- ✅ A Resend API key for email functionality

## 🌐 Deploy to Vercel

### Method 1: Deploy via Vercel Dashboard (Recommended)

1. **Go to Vercel Dashboard**
   - Visit [vercel.com](https://vercel.com)
   - Sign in with your GitHub account

2. **Import Your Repository**
   - Click "New Project"
   - Select "Import Git Repository"
   - Choose your `Personal-Portfolio-` repository

3. **Configure Project Settings**
   - **Project Name**: `personal-portfolio` (or your preferred name)
   - **Framework Preset**: Other
   - **Root Directory**: `./` (leave as default)
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`

4. **Add Environment Variables**
   Click "Environment Variables" and add:
   ```
   RESEND_API_KEY=your_resend_api_key_here
   FROM_EMAIL="Portfolio Contact <onboarding@resend.dev>"
   TO_EMAIL="your-email@example.com"
   NODE_ENV=production
   ```

5. **Deploy**
   - Click "Deploy"
   - Wait for the build to complete (usually 2-3 minutes)

### Method 2: Deploy via Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy from your project directory**
   ```bash
   vercel
   ```

4. **Follow the prompts:**
   - Set up and deploy? `Y`
   - Which scope? Select your account
   - Link to existing project? `N`
   - What's your project's name? `personal-portfolio`
   - In which directory is your code located? `./`

5. **Add Environment Variables**
   ```bash
   vercel env add RESEND_API_KEY
   vercel env add FROM_EMAIL
   vercel env add TO_EMAIL
   ```

## 🔧 Environment Variables Setup

### Required Environment Variables

| Variable | Description | Example |
|----------|-------------|---------|
| `RESEND_API_KEY` | Your Resend API key | `re_aiwAvGtC_572nCCxfJfVs2WurdBcQJ63R` |
| `FROM_EMAIL` | Email address for sending notifications | `"Portfolio Contact <onboarding@resend.dev>"` |
| `TO_EMAIL` | Your email address to receive notifications | `"your-email@example.com"` |
| `NODE_ENV` | Environment mode | `production` |

### Setting Environment Variables in Vercel Dashboard

1. Go to your project dashboard
2. Click on "Settings" tab
3. Click on "Environment Variables" in the sidebar
4. Add each variable with its value
5. Make sure to select "Production", "Preview", and "Development" for each variable

## 🔍 Troubleshooting

### Common Issues and Solutions

#### 1. Build Fails
**Error**: `Build failed with exit code 1`
**Solution**: 
- Check that all dependencies are in `package.json`
- Ensure the build script runs locally: `npm run build`
- Check build logs in Vercel dashboard for specific errors

#### 2. Email Not Working
**Error**: Emails not being sent
**Solution**:
- Verify `RESEND_API_KEY` is set correctly
- Check Resend dashboard for API usage and errors
- Test email locally: `npx tsx server/test-email.ts`

#### 3. 404 Errors on Routes
**Error**: Page not found on refresh
**Solution**:
- Ensure `vercel.json` is configured correctly
- Check that all routes are handled by the server

#### 4. Environment Variables Not Loading
**Error**: `RESEND_API_KEY not configured`
**Solution**:
- Verify environment variables are set in Vercel dashboard
- Redeploy after adding environment variables
- Check variable names match exactly (case-sensitive)

### Debugging Steps

1. **Check Build Logs**
   - Go to Vercel dashboard → Your project → Deployments
   - Click on the failed deployment
   - Review build logs for errors

2. **Check Function Logs**
   - Go to Functions tab in your project dashboard
   - Check serverless function logs for runtime errors

3. **Test Locally**
   ```bash
   # Test production build locally
   npm run build
   npm start
   ```

## 🎯 Post-Deployment Checklist

After successful deployment:

- [ ] ✅ Website loads correctly at your Vercel URL
- [ ] ✅ All pages navigate properly
- [ ] ✅ Contact form submits successfully
- [ ] ✅ Email notifications are received
- [ ] ✅ Mobile responsiveness works
- [ ] ✅ Dark/light theme toggle works
- [ ] ✅ All external links work

## 🔄 Continuous Deployment

Vercel automatically deploys when you push to your main branch:

1. **Make changes locally**
2. **Commit and push to GitHub**
   ```bash
   git add .
   git commit -m "Your changes"
   git push origin main
   ```
3. **Vercel automatically deploys** the new version

## 🌟 Custom Domain (Optional)

To use a custom domain:

1. **Go to Project Settings**
2. **Click "Domains"**
3. **Add your domain**
4. **Configure DNS** as instructed by Vercel
5. **Wait for SSL certificate** to be issued

## 📊 Performance Optimization

Your deployment includes:
- ✅ **Code Splitting**: Optimized bundle chunks
- ✅ **Compression**: Gzip compression enabled
- ✅ **Caching**: Static assets cached with proper headers
- ✅ **CDN**: Global edge network delivery
- ✅ **Serverless Functions**: Auto-scaling backend

## 🆘 Need Help?

If you encounter issues:

1. **Check Vercel Documentation**: [vercel.com/docs](https://vercel.com/docs)
2. **Review Build Logs**: In your Vercel dashboard
3. **Test Locally**: Ensure everything works locally first
4. **Check Environment Variables**: Verify all required variables are set

## 🎉 Success!

Once deployed, your portfolio will be available at:
- **Vercel URL**: `https://your-project-name.vercel.app`
- **Custom Domain**: `https://yourdomain.com` (if configured)

Your portfolio is now live and ready to showcase your work to the world! 🌟