# Work is still going on so all files may not be uploaded on github right now

# Overview

Welcome to the "chatpdf-yt" project, a comprehensive chat application with PDF integration. This project is designed to provide a seamless chat experience where users can upload PDF files, create chats around them, and interact with an AI assistant. The AI assistant uses the OpenAI API to generate responses based on the chat context. The application also includes a subscription feature, where users can subscribe to access premium features. The subscription process is handled using Stripe for payments and webhooks for event processing.

## 🌟 Firebase vs AWS S3 (Bucket) 🚀

Yes, Firebase can be used instead of AWS S3 (AWS Simple Storage Service or "bucket") for many use cases, depending on your project requirements. Here's a breakdown:

### 🔥 **Firebase Storage**
Firebase provides **Cloud Storage**, a scalable solution for storing and serving files such as images, videos, and other content.

**Features:**
- 📦 Built-in **Google Cloud integration**.
- ⚡ **Real-time synchronization** with Firebase clients.
- 🔒 Built-in **security rules** for authentication (using Firebase Authentication).
- 🛠️ Simple integration with **Firebase SDKs** for web, Android, iOS, etc.

#### **When to Choose Firebase Cloud Storage**
1. ✅ **Simple Integration:** If your app already uses other Firebase services like Firestore or Realtime Database, Firebase Storage is a natural choice.
2. 🔑 **Authentication:** It seamlessly integrates with Firebase Authentication for secure file access.
3. 🔄 **Real-Time Needs:** Firebase SDKs make it easy to handle real-time uploads/downloads, resumable file uploads, and monitoring.
4. 🎁 **Free Tier:** Firebase offers a generous free tier under the **Spark Plan**.
5. 🚀 **Ease of Use:** Firebase is beginner-friendly and has extensive SDKs, making it great for rapid development.

---

### ☁️ **AWS S3 (Bucket)**
AWS S3 is a more **flexible and powerful storage solution**, widely used for enterprise-grade applications.

**Features:**
- 🔧 Highly customizable **access policies** (via IAM roles and policies).
- 📜 **Lifecycle policies** for automatic archival or deletion.
- 🤝 Integrates with a wide array of AWS services like Lambda, CloudFront, and Glacier.
- 📈 Scalability for large-scale or high-traffic systems.

#### **When to Choose AWS S3**
1. 🏢 **Complex Requirements:** If your project involves heavy integration with other AWS services or complex workflows.
2. 📡 **Scalability & Customization:** For large-scale applications needing more granular control over storage, security, and access.
3. 💸 **Cost Management:** AWS S3 can sometimes be more cost-effective for high-volume storage compared to Firebase.

---

### 🤔 **When Firebase Can Replace AWS S3**
- 🌍 Small to medium-scale apps.
- 🔗 Apps tightly coupled with Firebase/Google Cloud services.
- 🚀 Apps requiring easier setup and management.

### 🏗️ **When AWS S3 is Better**
- 🏢 Enterprise-level systems with complex storage and access control needs.
- 📊 Applications with high storage requirements or specific AWS integrations.
- 🛡️ Scenarios requiring advanced features like **object versioning**, **data lifecycle management**, or **customized encryption policies**.

---

### ✨ **Conclusion**
- Use **Firebase** for quick, simple setups and tight integration with Firebase services.
- Choose **AWS S3** for enterprise-grade scalability, customization, and advanced workloads.

//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
# 🌟 Popular UI Libraries Used in the Industry

This document highlights the most commonly used UI libraries in companies, categorized by their application type, region, and ecosystem.

---

## 1. 🎨 Material-UI (MUI)  
**Industry Use**:  
Widely used in SaaS companies, startups, and large enterprises.  
Ideal for dashboards, B2B tools, and internal systems, aligning with Google's Material Design for a consistent UX.  

**✨ Why?**  
- 📚 Comprehensive component library.  
- 📖 Robust documentation and ecosystem support.  
- 🎨 Easy to integrate with themes and design systems.  

**🏢 Examples**:  
Spotify, Bitly, and Medium.  

---

## 2. 🧩 Ant Design  
**Industry Use**:  
A favorite in Asia (especially China) for enterprise applications, fintech, and CRM systems.  
Often used in data-heavy applications.  

**✨ Why?**  
- 💼 Polished design for enterprise use cases.  
- 🌏 Strong support for internationalization and RTL (Right-to-Left) layouts.  
- ⚡ Deep integration with React and TypeScript.  

**🏢 Examples**:  
Alibaba, Tencent, and other large Chinese companies.  

---

## 3. 🎯 Tailwind CSS (often paired with Headless UI or Radix UI)  
**Industry Use**:  
Gaining traction in modern startups, especially in the US and Europe.  
Used for marketing sites and highly interactive, custom-designed applications.  

**✨ Why?**  
- 🛠️ Flexibility for creating unique, custom designs.  
- 🏗️ Works seamlessly with design systems and component-first workflows.  
- 🚀 Lightweight and avoids bloated styles.  

**🏢 Examples**:  
GitHub, Vercel, and Supabase.  

---

## 4. 🌈 Chakra UI  
**Industry Use**:  
Adopted by startups and mid-sized companies for rapid development.  
Popular among teams prioritizing accessibility and custom design.  

**✨ Why?**  
- 👩‍💻 Developer-friendly with easy customization.  
- ♿ Accessible out of the box.  
- 📱 Great for responsive, modern web applications.  

**🏢 Examples**:  
Startups and projects balancing speed and design flexibility.

---

## 5. 🏛️ Bootstrap (React-Bootstrap)  
**Industry Use**:  
Commonly seen in older companies, legacy systems, or applications with simple UIs.  
Less common in modern startups due to its outdated look compared to alternatives.  

**✨ Why?**  
- 🔧 Familiarity among developers.  
- ⚡ Great for simple, fast prototypes.  

**🏢 Examples**:  
Government websites and older enterprise applications.  

---

## 6. 🛠️ Radix UI  
**Industry Use**:  
Popular for bespoke, highly interactive interfaces.  
Often paired with Tailwind CSS for advanced flexibility.  

**✨ Why?**  
- 🧱 Provides low-level primitives for highly customized components.  
- ♿ Great for accessibility and performance.  

**🏢 Examples**:  
Used in advanced design systems or interactive UIs requiring precise control.

---

## 7. 🌟 Mantine  
**Industry Use**:  
Emerging in startups and mid-sized companies, balancing functionality and modern aesthetics.  

**✨ Why?**  
- 🔌 Great hooks and utility components.  
- 🖥️ Server-Side Rendering (SSR) support for Next.js projects.  

**🏢 Examples**:  
Growing adoption but not as established as MUI or Ant Design.  

---

## 🌍 Verdict: Most Common Choices by Region/Use Case  
- **🌏 MUI**: Global leader for enterprise and SaaS apps.  
- **🇨🇳 Ant Design**: Dominates in Asia for enterprise software.  
- **🚀 Tailwind CSS + Headless/Radix UI**: Popular for startups and custom-designed apps.  
- **🌈 Chakra UI**: Startups and modern web apps with accessibility needs.  
- **🏛️ Bootstrap**: Legacy and simple applications.  
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

# Technologies and Frameworks

- Next.js
- React
- TypeScript
- Tailwind CSS
- Clerk
- Drizzle ORM
- PostgreSQL
- AWS SDK/ Firebase
- OpenAI API
- Stripe
- Axios
- Pinecone
- Drizzle-kit
- OpenAI Edge
- Neon Database Serverless
- Drizzle-orm/neon-http
- @tanstack/react-query
- @clerk/nextjs
- clsx
- tailwind-merge

# Installation

Follow the steps below to install and setup the project:

1. **Clone the repository**

   Open your terminal and run the following command:

   ```bash
   git clone https://github.com/VijetaPriya47/chatpdf.git
   ```

2. **Navigate to the project directory**

   ```bash
   cd chatpdf-yt
   ```

3. **Install Node.js**

   The project requires Node.js version 13.4.19 or later. You can download it from [here](https://nodejs.org/en/download/).

4. **Install the required dependencies**

   Run the following command to install all the required dependencies:

   ```bash
   npm install
   ```

   This will install all the dependencies listed in the `package.json` file, including Next.js, React, React DOM, Axios, Stripe, Tailwind CSS, and other specific dependencies such as "@aws-sdk/client-s3" and "@clerk/nextjs".

5. **Setup environment variables**

    Create a `.env` file in the root directory of your project and add the required environment variables.

6. **Run the project**

    Now, you can run the project using the following command:

    ```bash
    npm run dev
    ```

    Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


