# JTI Website + Content Manager — Setup

This folder (`jti-cms`) is the **new, CMS-powered version of your website**. Instead of 32 hand-written HTML files, pages are now generated from editable content files — which means you get an admin screen at `yoursite.com/admin` where you edit text and images in normal forms.

**What you'll be able to do once this is set up:** open `/admin`, log in, click a journey, change any wording, drag in a photo for any day, hit Save — the site rebuilds and republishes itself in about a minute. No code, no filenames to remember.

---

## What's in here

```
jti-cms/
├── src/
│   ├── content/           ← YOUR CONTENT (what the CMS edits)
│   │   ├── itineraries/   ← 18 journeys, one file each
│   │   ├── parks/         ← 5 park guides
│   │   └── stories/       ← 3 Field Notes stories
│   ├── _data/
│   │   ├── home.json      ← homepage text & images
│   │   └── site.json      ← phone, email, address
│   ├── _includes/         ← page templates & styling
│   ├── assets/            ← images (uploads land in assets/uploads)
│   ├── admin/             ← the content manager
│   ├── index.njk, tours.njk, field-notes.njk
│   └── static/            ← Our Story, thanks, 404 pages
├── .eleventy.js           ← build configuration
├── netlify.toml           ← tells Netlify how to build
└── package.json
```

---

## Setup — one time, about 30–45 minutes

### Step 1 — Put this folder on GitHub
1. Create a free account at **github.com** if you don't have one.
2. Click **New repository**, name it `jti-website`, keep it **Private**, and create it.
3. Upload this `jti-cms` folder's **contents** (not the folder itself). Easiest ways:
   - **GitHub Desktop** (recommended, free): install it, "Add local repository", point at `jti-cms`, then Publish.
   - Or on the repo page: *Add file → Upload files*, and drag everything in.

### Step 2 — Tell the CMS where your repo is
Open **`src/admin/config.yml`** and change the third line:

```yaml
repo: YOUR-GITHUB-USERNAME/jti-website
```

…to your actual username and repo name. Save and push the change.

### Step 3 — Connect Netlify to the repo
1. In Netlify: **Add new site → Import an existing project → GitHub**, and pick your repo.
2. Netlify reads `netlify.toml` automatically, so the settings should already say:
   - **Build command:** `npm run build`
   - **Publish directory:** `_site`
3. Click **Deploy**. Your site builds and goes live on a `…netlify.app` address.

> From now on, every change you save in the CMS automatically triggers a rebuild — you never drag folders again.

### Step 4 — Enable login for the content manager
The CMS signs you in with your GitHub account. This needs a one-time connection:

1. On GitHub: **Settings → Developer settings → OAuth Apps → New OAuth App**
   - *Application name:* JTI Content Manager
   - *Homepage URL:* your Netlify site address
   - *Authorization callback URL:* `https://api.netlify.com/auth/done`
   - Create it, then **generate a client secret**. Copy the **Client ID** and **Client Secret**.
2. In Netlify: your site → **Site configuration → Access & security → OAuth → Install provider → GitHub**, and paste the Client ID and Secret.

Now visit **`your-site.netlify.app/admin`** and click **Login with GitHub**.

> This step is the fiddliest part of the whole process. If it gives you trouble, send me a screenshot of where you're stuck and I'll talk you through it.

### Step 5 — Point your domain
Same as before: **Domain settings → Add a custom domain →** `jungletravelsindia.com`, update the DNS records Netlify shows you, and let it issue the free SSL certificate. Then cancel Wix.

---

## Using the content manager

Go to `yoursite.com/admin`. You'll see four sections:

- **Journeys (Itineraries)** — all 18. Open one and you can edit the title, opening line, hero facts, route stops, and a **Day by day** list where each day has a title, description, accommodation and its **own photo field**. Add or remove days with a button.
- **Park Field Guides** — the 5 parks.
- **Field Notes (Journal)** — the stories, with a proper rich-text editor.
- **Pages & Settings** — the homepage (hero headline, carousel photos, credibility strip, intro, testimonial, enquiry text) and your contact details (phone, email, address — these update across the whole site at once).

**Images:** every photo field has an upload button. Drag a photo in, and it's stored in the media library ready to reuse. No filenames to remember, no folder discipline. Where a photo field is left empty, the site keeps showing the current stand-in image.

**Adding a new journey:** Journeys → **New Journey** → fill in the fields (remember to set a slug like `new-tour-name`) → Save. It appears on the Journeys page automatically, filtered by whichever category you chose.

---

## Notes

- **Nothing is lost:** your original drag-and-drop site is still in `JTI-Website-Final/`. Once the CMS version is live, this folder becomes the single source of truth.
- **Previewing locally** (optional, for a developer): `npm install` then `npm start`.
- **The build:** Netlify runs `npm run build`, which generates the site into `_site/`. You never touch this.
- **Costs:** GitHub free, Netlify free tier, Sveltia CMS is open-source and free. No new running costs.
