# 🚀 UPDATE EXISTING REPO & DEPLOY

**You already have everything set up! Just need to push the new code!**

---

## **STEP 1: Connect to Your Existing Repo**

Open terminal in your project folder:

```bash
# Check if git is already initialized
git status

# If you see "not a git repository", initialize it:
git init

# Connect to your existing GitHub repo
git remote add origin https://github.com/GS-Tejas-hub/Estox-V-Host.git

# Or if remote already exists, update it:
git remote set-url origin https://github.com/GS-Tejas-hub/Estox-V-Host.git

# Verify the remote is set
git remote -v
```

---

## **STEP 2: Commit & Push Your New Code**

```bash
# Add all your new changes
git add .

# Commit with a message
git commit -m "Updated with admin features, Supabase integration, and RLS fixes"

# Push to GitHub (force push to overwrite old code)
git push -f origin main
```

**Note:** Using `-f` (force) because your local code is the latest version and you want to replace the old code completely.

---

## **STEP 3: Add Environment Variables in Vercel**

1. Go to: https://vercel.com/dashboard
2. Find your **Estox-V-Host** project
3. Click on it
4. Go to **Settings** tab
5. Click **"Environment Variables"** (left sidebar)
6. Add these two variables:

   **Variable 1:**
   ```
   Name: VITE_SUPABASE_URL
   Value: https://mpumxjvheyuvfgmwujxn.supabase.co
   ```

   **Variable 2:**
   ```
   Name: VITE_SUPABASE_ANON_KEY
   Value: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1wdW14anZoZXl1dmZnbXd1anhuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQ0Njg0NzcsImV4cCI6MjA4MDA0NDQ3N30.uZ5cMDvknm2-a_qM90N-yEkd1kxm858JrHbiN_ZTGI
   ```

7. **Important:** For each variable, select **All** (Production, Preview, Development)
8. Click **"Save"**

---

## **STEP 4: Trigger Redeploy**

After adding environment variables:

1. Go to **Deployments** tab in Vercel
2. Click on the latest deployment
3. Click **"Redeploy"** button (top right with 3 dots → Redeploy)
4. Wait 2-3 minutes for deployment

**OR** it will auto-deploy from your git push!

---

## **STEP 5: Update Supabase URLs**

Once deployed, get your Vercel URL (e.g., `https://estox-v-host.vercel.app`):

1. Go to **Supabase Dashboard**: https://supabase.com/dashboard
2. Select your project
3. Go to **Authentication** → **URL Configuration**
4. Update **"Site URL"** to your Vercel URL:
   ```
   https://estox-v-host.vercel.app
   ```

5. Add to **"Redirect URLs"**:
   ```
   https://estox-v-host.vercel.app/*
   https://estox-v-host.vercel.app/login
   https://estox-v-host.vercel.app/signup
   https://estox-v-host.vercel.app/projects
   https://estox-v-host.vercel.app/portfolio
   ```

6. Click **"Save"**

---

## **STEP 6: Test Your Live Site!**

Visit your Vercel URL and test:

✅ **Login** with: `gudur.tejasgs@gmail.com / Demon@123`
✅ **Admin features** - Add/Edit/Delete projects
✅ **Make an investment**
✅ **Check Portfolio** - Investment should appear
✅ **Signup** as a new user
✅ **Test investor flow**

---

## **🎉 YOU'RE LIVE!**

Your updated Estox One platform is now deployed with:
- ✅ Full admin CRUD features
- ✅ Supabase database integration
- ✅ Working investments & portfolio
- ✅ RLS security enabled
- ✅ Authentication system

---

## **🔄 FUTURE UPDATES**

To deploy changes in the future:

```bash
# Make your changes to the code
# Then:
git add .
git commit -m "Description of changes"
git push origin main
```

**Vercel auto-deploys in 2-3 minutes!** 🚀

---

## **⚠️ TROUBLESHOOTING**

### **Issue: Git Push Rejected**

If you get "rejected" error:

```bash
# Force push (safe since you want to replace old code)
git push -f origin main
```

---

### **Issue: Can't Connect to Remote**

```bash
# Remove old remote
git remote remove origin

# Add it again
git remote add origin https://github.com/GS-Tejas-hub/Estox-V-Host.git

# Push
git push -f origin main
```

---

### **Issue: Deployment Fails**

1. Check Vercel build logs
2. Make sure environment variables are set
3. Try manual redeploy from Vercel dashboard

---

### **Issue: App Loads but Database Doesn't Work**

1. Check that environment variables start with `VITE_`
2. Verify they're set for "Production" environment
3. Redeploy after adding variables

---

**Start with STEP 1 and follow through! Your site will be live in 10 minutes!** 🚀
