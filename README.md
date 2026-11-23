# 約時間 · Find a Day

A group scheduling site: everyone opens the same link, types their name, and taps the days they're free. The sidebar ranks the days that suit the most people.

- **Website hosting:** GitHub Pages (free)
- **Shared data:** Google Firebase Firestore (free "Spark" plan, no credit card)

Setup takes about 10 minutes, all in the browser.

---

## Step 1 — Create the Firebase database

1. Go to <https://console.firebase.google.com> and sign in with a Google account.
2. Click **Create a project** (or **Add project**). Name it, e.g. `find-a-day`. You can turn **off** Google Analytics. Click **Create project**.
3. In the left menu, open **Build → Firestore Database** and click **Create database**.
   - Location: pick one near your group, e.g. `asia-east2 (Hong Kong)`.
   - Start in **production mode**. Click **Create**.
4. Open the **Rules** tab of Firestore, delete everything there, paste in the whole contents of `firestore.rules` from this folder, and click **Publish**.

## Step 2 — Get your Firebase settings

1. Click the gear icon ⚙️ next to **Project Overview** → **Project settings**.
2. Scroll to **Your apps** and click the **web** icon `</>`.
3. Give it a nickname (e.g. `web`), leave "Firebase Hosting" unticked, click **Register app**.
4. You'll see a block like `const firebaseConfig = { apiKey: "...", ... }`. Copy the values into `config.js` in this folder, replacing the placeholders.

(These values are meant to be public. The rules from Step 1 control what people can do.)

## Step 3 — Put the site on GitHub Pages

1. Sign in at <https://github.com> (create a free account if needed).
2. Click **+ → New repository**. Name it e.g. `find-a-day`, set it to **Public**, and click **Create repository**.
3. On the new repo page, click **uploading an existing file**. Drag in all the files from this folder (`index.html`, `config.js`, `firestore.rules`, `README.md`), then click **Commit changes**.
4. Go to **Settings → Pages**. Under **Build and deployment**, set **Source** to *Deploy from a branch*, **Branch** to `main` and folder `/ (root)`. Click **Save**.
5. Wait about 1 minute and refresh. Your site's address appears at the top, e.g.
   `https://YOUR-USERNAME.github.io/find-a-day/`

Send that link to your group. Nobody needs an account.

---

## Using it

- **One event per link.** The plain link is your main event. Click **＋ New event** to start a fresh calendar with its own link (`…/find-a-day/?e=abc123`), then use **Copy link** to send it.
- **Group size**: set how many people you expect, with the +/− in the sidebar.
- **Language**: the 中文 / EN button switches the labels.

## Good to know

- There's no login: anyone with the link can add a name or change any entry. That's fine for friends, but don't post the link publicly.
- Firebase's free plan allows 50,000 reads and 20,000 writes a day, far more than a friend group needs.
- To change the site later, edit the files on GitHub (click a file → ✏️ pencil icon → Commit). The site updates within a minute.
