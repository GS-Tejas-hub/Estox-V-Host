# 🔍 DEBUG: Portfolio Not Showing Investments

## **Step 1: Open Browser Console**

1. Press **F12** (or Right-click → Inspect)
2. Click **"Console"** tab
3. Keep it open

---

## **Step 2: Make a Test Investment**

1. Go to Projects page
2. Click "Invest Now" on any project
3. Accept terms (the 2 checkboxes)
4. Enter quantity (e.g., 3 sqft)
5. Click "Confirm Payment"

### **Watch Console for These Messages:**

You should see:
```
[Investment] Creating investment: {project_id: "...", user_email: "...", ...}
[Investment] Created result: {id: "...", ...}
```

**If you DON'T see these messages:**
- The investment isn't being created
- There's an error happening

**If you DO see them but result is `null`:**
- Investment creation failed
- Database issue

---

## **Step 3: Check Portfolio**

1. Go to Portfolio page (`/portfolio`)
2. Watch console for:
```
[Portfolio] Current user: {email: "...", role: "..."}
[Portfolio] All investments from DB: [...]
[Portfolio] Filtered user investments: [...]
```

### **What the Messages Tell You:**

**If "All investments from DB" is empty `[]`:**
- No investments in database AT ALL
- Investment.create() is failing

**If "All investments" has data but "Filtered" is empty:**
- Email doesn't match
- Check if user.email === investment.user_email

---

## **Step 4: Check Supabase Database**

1. Go to Supabase Dashboard
2. Table Editor → **investments** table
3. Look for rows

### **If Table is Empty:**
Investment.create() is NOT saving to database!

**Possible Causes:**
1. RLS policy blocking inserts
2. Missing `investor_id` field
3. Supabase connection error

### **If Table Has Data:**
Check the `user_email` column:
- Does it match your login email EXACTLY?
- Any typos?

---

## **Most Likely Issues:**

### **Issue 1: RLS Policy Blocking** ⭐ MOST LIKELY

The RLS policy requires `investor_id` to match, but we're not setting it properly.

**Fix:** Check if Investment.create() is setting `investor_id`

### **Issue 2: Email Mismatch**

The saved `user_email` doesn't match your current login email.

**Fix:** In console, compare:
- User email: from `[Portfolio] Current user`
- Investment email: from `[Portfolio] All investments`

---

## **Quick Test:**

Run this in Browser Console:

```javascript
// Check current user
(async () => {
  const { User } = await import('/src/entities/User.ts');
  const user = await User.me();
  console.log('Current User:', user);
})();

// Check investments
(async () => {
  const { Investment } = await import('/src/entities/Investment.ts');
  const invs = await Investment.list();
  console.log('All Investments:', invs);
})();
```

---

## **TELL ME:**

After you do the test investment:

1. **What do you see in Console?**
   - Share the `[Investment]` messages
   - Share the `[Portfolio]` messages

2. **What's in Supabase investments table?**
   - Is it empty?
   - If not, what's the `user_email` value?

3. **What's your login email?**
   - From the console `[Portfolio] Current user`

Then I can fix the exact issue! 🔍
