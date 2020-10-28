---
title: 'How I deployed this site in a couple hours for (almost) free'
date: '10/27/2020'
---

I deployed this site in about four hours. I cheated, I cut corners, I used a bunch of free tools and templates. And this is exactly what I needed.

# Starting at 90% complete by using a Next.js template
[Next.js](https://nextjs.org/) is a React front-end framework for building either static or server-side rendered sites. It's awesome. And Next.js has a [WordPress CMS example](https://github.com/vercel/next.js/tree/canary/examples/cms-wordpress) (which [looks pretty nice](https://next-blog-wordpress.now.sh/)) And Next.js has more [examples](https://github.com/vercel/next.js/tree/canary/examples) for almost anything you can think of. Creating a new GitHub repo, copying a template, tweaking it just a bit, and hooking up a CMS or writing markdown files gets us about 90% to a complete, simple blog or personal site.

# Put it out there on that big, beautiful world wide web (99% complete)
Hooking my repository up to [Netlify](https://www.netlify.com/) for free deployment and hosting (yes completely free) took about 5 minutes. There's a button in their beautiful menu that basically does it for you.

Once you've authorized Netlify to rifle through your repository, it's almost like it deploys itself. One small gotcha that I missed because reading docs is for nerds (jk please read the docs please) was that setting up your build is about [100x easier if you have a `netlify.toml` file](https://docs.netlify.com/configure-builds/file-based-configuration/) in your project root.

Then you'll need to [describe that as an npm export command](https://docs.npmjs.com/creating-a-package-json-file) in `package.son`,

Spooky complicated, I know.

# That last 1%
Go drop some $$$'s on a domain (I used [Google Domains](https://domains.google/)) and plug it into Netlify,

Then you'll have to do some magic and make sure that Netlify is being used for your domain's name servers. This will depend on where you got your domain (it was a copy-paste and wait scenario for Google Domains.) And at this point, *Netlify will automagically generate a certificate for you using [Let's Encrypt](https://letsencrypt.org/)!* I don't know how that works and I don't care but I think it's awesome.

# And that's it!
So for the price of just a few dollars or some ridiculous aftermarket price for a domain, you now have a personal site. A site with free hosting. Free builds. Free deployment management. Available anywhere. With your beautiful face and name plastered all over it. Congratulations Netlify- I mean **you** did it. I'm so proud 🎉