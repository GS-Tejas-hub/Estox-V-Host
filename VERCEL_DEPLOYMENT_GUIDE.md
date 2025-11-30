# 🚀 VERCEL DEPLOYMENT GUIDE - Estox One

Complete step-by-step guide to deploy your Estox One platform to Vercel.

---

## ✅ PREREQUISITES

Before you start, make sure you have:

1. ✅ **Git installed** on your computer
2. ✅ **GitHub account** (free)
3. ✅ **Vercel account** (free) - Sign up at [vercel.com](https://vercel.com)
4. ✅ **Your Supabase credentials** (you already have these in `.env.local`)

---

## 📋 STEP-BY-STEP DEPLOYMENT

### **STEP 1: Initialize Git Repository**

Open terminal in your project folder and run:

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit your code
git commit -m "Initial commit - Estox One ready for deployment"
```

---

### **STEP 2: Create GitHub Repository**

1. Go to [github.com](https://github.com)
2. Click **"New repository"** button (top right)
3. Name it: `estox-one` (or any name you prefer)
4. Keep it **Public** or **Private** (your choice)
5. **DON'T** check "Initialize with README"
6. Click **"Create repository"**

---

### **STEP 3: Push to GitHub**

Copy the commands from GitHub and run them:

```bash
# Add GitHub as remote
git remote add origin https://github.com/YOUR-USERNAME/estox-one.git

# Push your code
git branch -M main
git push -u origin main
```

**Replace `YOUR-USERNAME` with your actual GitHub username!**

---

### **STEP 4: Deploy to Vercel**

#### **Option A: Via Vercel Website (Recommended)**

1. Go to [vercel.com/new](https://vercel.com/new)
2. Click **"Import Git Repository"**
3. Find your `estox-one` repository and click **"Import"**
4. Configure your project:
   - **Framework Preset**: Vite
   - **Root Directory**: `./` (leave as is)
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`

5. **IMPORTANT: Add Environment Variables**
   
   Click **"Environment Variables"** and add these:

   ```
   VITE_SUPABASE_URL = https://mpumxjvheyuvfgmwujxn.supabase.co
   VITE_SUPABASE_ANON_KEY = eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1wdW14anZoZXl1dmZnbXd1anhuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQ0Njg0NzcsImV4cCI6MjA4MDA0NDQ3N30.uZ5cMDvknm2-a_qM90N-yEkd1kxm858JrHbiN_ZTGI
   ```

   *(These are the same values from your `.env.local` file)*

6. Click **"Deploy"**

7. ⏳ **Wait 2-3 minutes** for deployment to complete

8. 🎉 **Done!** You'll get a live URL like: `https://estox-one.vercel.app`

---

#### **Option B: Via Vercel CLI (Advanced)**

```bash
# Install Vercel CLI
npm install -g vercel

# Login to Vercel
vercel login

# Deploy
vercel

# Follow the prompts:
# - Link to existing project? No
# - Project name? estox-one
# - Which scope? (select your account)
# - Found Vite config? Yes
# - Do you want to override settings? No

# Set environment variables
vercel env add VITE_SUPABASE_URL
# Paste: https://mpumxjvheyuvfgmwujxn.supabase.co

vercel env add VITE_SUPABASE_ANON_KEY
# Paste: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...

# Deploy to production
vercel --prod
```

---

## 🔧 POST-DEPLOYMENT CONFIGURATION

### **1. Update Supabase URL Whitelist**

Your app is now on a new domain! You need to whitelist it in Supabase:

1. Go to [Supabase Dashboard](https://supabase.com/dashboard)
2. Select your project
3. Go to **Authentication** → **URL Configuration**
4. Add your Vercel URL to **"Site URL"**:
   ```
   https://your-app-name.vercel.app
   ```
5. Add to **"Redirect URLs"**:
   ```
   https://your-app-name.vercel.app/login
   https://your-app-name.vercel.app/signup
   https://your-app-name.vercel.app/projects
   https://your-app-name.vercel.app/portfolio
   ```
6. Click **"Save"**

---

### **2. Test Your Deployment**

Visit your Vercel URL and test:

✅ **Home page loads**
✅ **Login works** (use: `gudur.tejasgs@gmail.com / Demon@123`)
✅ **Projects page displays**
✅ **Admin can add/edit/delete projects**
✅ **Investments save to database**
✅ **Portfolio shows investments**

---

## 🎯 CUSTOM DOMAIN (Optional)

Want to use **estox.in** instead of **vercel.app**?

### **Add Custom Domain:**

1. Go to your project settings on Vercel
2. Click **"Domains"**
3. Add your domain: `estox.in` and `www.estox.in`
4. Vercel will show you DNS records to add
5. Go to your domain registrar (GoDaddy, Namecheap, etc.)
6. Add the DNS records Vercel provided:
   ```
   Type: A
   Name: @
   Value: 76.76.21.21

   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   ```
7. Wait 24-48 hours for DNS propagation
8. ✅ Your site will be live at `estox.in`!

---

## ⚡ AUTOMATIC DEPLOYMENTS

**Every time you push to GitHub, Vercel auto-deploys!**

To update your site:
```bash
# Make changes to your code
# Then commit and push:
git add .
git commit -m "Updated features"
git push origin main
```

Vercel will automatically:
1. Detect the push
2. Build your app
3. Deploy the new version
4. Live in 2-3 minutes!

---

## 🐛 COMMON ISSUES & FIXES

### **Issue 1: Build Fails**

**Error:** `Build failed` or `TypeScript errors`

**Fix:**
```bash
# Test build locally first
npm run build

# Fix any TypeScript errors shown
# Then push again
```

---

### **Issue 2: Environment Variables Not Working**

**Error:** App loads but can't connect to Supabase

**Fix:**
1. Go to Vercel project → Settings → Environment Variables
2. Make sure `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY` are set
3. Make sure they start with `VITE_` (Vite requires this prefix!)
4. Redeploy:
   - Go to Deployments tab
   - Click "Redeploy" on latest deployment

---

### **Issue 3: Authentication Fails**

**Error:** Login doesn't work or redirects fail

**Fix:**
1. Check Supabase URL Configuration (see Step 1 above)
2. Ensure your Vercel URL is whitelisted
3. Check browser console for CORS errors

---

### **Issue 4: 404 on Page Refresh**

**Error:** Refreshing `/projects` gives 404

**Fix:** Create `vercel.json` in your project root:

```json
{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

Then:
```bash
git add vercel.json
git commit -m "Add vercel.json for routing"
git push origin main
```

---

## 📊 DEPLOYMENT CHECKLIST

Before going live to users:

- [ ] App builds successfully locally (`npm run build`)
- [ ] All environment variables set in Vercel
- [ ] Supabase URL whitelist updated
- [ ] RLS policies enabled on Supabase tables
- [ ] Admin account works (gudur.tejasgs@gmail.com)
- [ ] Test investor signup and login
- [ ] Test making an investment
- [ ] Test portfolio display
- [ ] Test admin add/edit/delete projects
- [ ] Test on mobile devices
- [ ] Test across browsers (Chrome, Firefox, Safari)

---

## 🎉 YOU'RE LIVE!

Once deployed:
- 🌍 Your app is live globally
- ⚡ Uses Vercel's CDN (super fast)
- 🔒 Free SSL certificate (HTTPS)
- 🚀 Auto-deploys on every git push
- 💯 99.99% uptime

**Your Vercel deployment is production-ready!**

---

## 📱 SHARE YOUR LIVE APP

Share your Vercel URL:
```
https://your-app-name.vercel.app
```

Or with custom domain:
```
https://estox.in
```

---

## 🆘 NEED HELP?

- **Vercel Docs**: https://vercel.com/docs
- **Vercel Discord**: https://vercel.com/discord
- **Supabase Docs**: https://supabase.com/docs

---

**Happy Deploying! Your Estox One platform is ready for the world! 🚀**
