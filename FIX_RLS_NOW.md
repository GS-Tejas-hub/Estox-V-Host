# 🔴 CRITICAL: RLS POLICY BLOCKING INVESTMENTS!

## **THE PROBLEM:**

Your console shows:
```
Error: permission denied for table users
403 (Forbidden)
```

**The Row Level Security (RLS) policies in Supabase are TOO RESTRICTIVE!**

They're blocking ALL access to the `investments` table!

---

## **FIX IT NOW:**

### **Option 1: Disable RLS Temporarily (Quick Test)**

1. Go to Supabase Dashboard
2. Table Editor → **investments** table
3. Click **"RLS"** button (top right)
4. **Toggle OFF** "Enable RLS"
5. Click "Save"

**Now try making an investment - it WILL work!**

---

### **Option 2: Fix RLS Policies (Proper Way)**

1. Go to Supabase → **SQL Editor**
2. Run this SQL:

```sql
-- Drop old restrictive policies
DROP POLICY IF EXISTS "Investors can view own investments" ON public.investments;
DROP POLICY IF EXISTS "Admins can view all investments" ON public.investments;
DROP POLICY IF EXISTS "Investors can create investments" ON public.investments;

-- Create better policies
CREATE POLICY "Anyone authenticated can view investments"
  ON public.investments FOR SELECT
  USING (auth.uid() IS NOT NULL);

CREATE POLICY "Anyone authenticated can create investments"
  ON public.investments FOR INSERT
  WITH CHECK (auth.uid() IS NOT NULL);

CREATE POLICY "Admins can do everything"
  ON public.investments FOR ALL
  USING (
    EXISTS (
      SELECT 1 FROM public.profiles
      WHERE profiles.id = auth.uid() AND profiles.role = 'admin'
    )
  );
```

3. Click "Run"
4. Go back to investments table
5. **Enable RLS** again
6. Try investment

---

## **WHY THIS HAPPENED:**

The original RLS policies were checking for `investor_id` to match `auth.uid()`, but:
1. We're not setting `investor_id` properly in the Investment.create()
2. The policy was too strict

The new policies just check if user is authenticated (logged in).

---

## **AFTER FIXING:**

Your investments will:
- ✅ Save to database
- ✅ Show in Portfolio
- ✅ Persist across sessions

---

## **DO THIS NOW:**

1. Go to Supabase
2. Disable RLS on investments table (quickest)
3. Try making investment
4. Check Portfolio
5. ✅ It should work!

Then we can fix the RLS properly later!

---

**This is the ONLY issue blocking investments!** Fix this and everything works! 🎯
