# 🚀 QUICK DEPLOYMENT STEPS

## **Ready to deploy? Follow these 6 simple steps:**

---

### **1️⃣ Install Git (if not already)**
Download from: https://git-scm.com/downloads

---

### **2️⃣ Initialize Git & Commit**
```bash
git init
git add .
git commit -m "Ready for deployment"
```

---

### **3️⃣ Create GitHub Repository**
1. Go to github.com → New Repository
2. Name: `estox-one`
3. Don't initialize with README
4. Create repository

---

### **4️⃣ Push to GitHub**
```bash
git remote add origin https://github.com/YOUR-USERNAME/estox-one.git
git branch -M main
git push -u origin main
```
*(Replace YOUR-USERNAME with your GitHub username)*

---

### **5️⃣ Deploy to Vercel**
1. Go to: https://vercel.com/new
2. Import your GitHub repository
3. Framework: **Vite**
4. **Add Environment Variables:**
   ```
   VITE_SUPABASE_URL = https://mpumxjvheyuvfgmwujxn.supabase.co
   VITE_SUPABASE_ANON_KEY = eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1wdW14anZoZXl1dmZnbXd1anhuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQ0Njg0NzcsImV4cCI6MjA4MDA0NDQ3N30.uZ5cMDvknm2-a_qM90N-yEkd1kxm858JrHbiN_ZTGI
   ```
5. Click **Deploy**

---

### **6️⃣ Update Supabase URLs**
1. Go to Supabase Dashboard
2. Authentication → URL Configuration
3. Add your Vercel URL to:
   - **Site URL**: `https://your-app.vercel.app`
   - **Redirect URLs**: Add these:
     ```
     https://your-app.vercel.app/login
     https://your-app.vercel.app/signup
     https://your-app.vercel.app/projects
     https://your-app.vercel.app/portfolio
     ```
4. Save

---

## ✅ **DONE!**

Your app is now live at: `https://your-app-name.vercel.app`

**Test it:**
- ✅ Visit the URL
- ✅ Login with: `gudur.tejasgs@gmail.com / Demon@123`
- ✅ Test admin features
- ✅ Test investments

---

## 🔄 **To Update Your Live Site:**

Just push to GitHub:
```bash
git add .
git commit -m "Your changes"
git push origin main
```

Vercel auto-deploys in 2-3 minutes! 🚀

---

**For detailed instructions, see: `VERCEL_DEPLOYMENT_GUIDE.md`**
