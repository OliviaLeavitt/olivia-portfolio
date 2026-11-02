# AWS Amplify deployment

This repository is the portfolio frontend. The intended custom domain is
https://olivialeavitt.com. Livletics is a separate app at
https://livletics.olivialeavitt.com.

## Amplify settings

- AWS project: Olivia Development; verify the AWS identity before changing resources.
- Region used for this setup: us-east-2.
- GitHub repository: OliviaLeavitt/olivia-portfolio.
- Production branch: main.
- Application root: repository root (not a monorepo).
- Build specification: amplify.yml; Node 24, npm ci, npm run build, output dist/.
- No backend, database, or secret environment variables are required.

## Domain setup

Keep Cloudflare as the DNS provider. Use an Amplify-managed certificate and the
exact DNS records returned by Amplify. Do not create a Route 53 hosted zone.
Use DNS-only CNAME records in Cloudflare. Preserve unrelated DNS and email records.

The root domain and www belong to the portfolio app. Associate only the livletics
subdomain with the separate Livletics app, so it cannot replace the portfolio.

## Release order and verification

1. Build and deploy the Livletics frontend from its own repository.
2. Connect livletics.olivialeavitt.com and wait for HTTPS to work.
3. Publish the portfolio change that adds the Try Livletics link.
4. Verify the portfolio domain, destination demo URL, and both apps' asset requests.

A committed build specification is deployment preparation, not proof that the
AWS deployment, certificate, or DNS configuration has completed.
