# Deployment to GitHub Pages

Yes, you can absolutely upload this to GitHub Pages!

## Steps

1.  **Configure Astro**:
    Open `astro.config.mjs` and uncomment/edit the `site` and `base` lines:
    ```js
    export default defineConfig({
      site: 'https://<your-username>.github.io',
      base: '/<your-repo-name>', // e.g., '/veritas-blog'
    });
    ```

2.  **Push to GitHub**:
    Commit your code and push it to a GitHub repository.

3.  **Enable GitHub Pages**:
    - Go to your repository **Settings**.
    - Click **Pages** in the sidebar.
    - Under **Source**, select **GitHub Actions**.

4.  **Create Workflow** (Optional but Recommended):
    Create a file `.github/workflows/deploy.yml` with the standard Astro deployment action.
    Or simply select the **Astro** preset if GitHub suggests it (it usually does!).

Your site will build and deploy automatically.
