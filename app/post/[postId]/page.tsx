import { useRouter } from 'next/navigation';
import React from 'react';

const blogPosts = [
  {
    date: "2024-06-01",
    title: "The Importance of Accurate Bookkeeping",
    shortDescription: "Discover why precise bookkeeping is crucial for business success.",
    description: "Accurate bookkeeping ensures reliable financial records, aiding in strategic planning and compliance.",
    longDescription: "Accurate bookkeeping is the backbone of a successful business. It provides reliable financial records that are essential for strategic planning, compliance, and decision-making. By keeping meticulous records, businesses can track their financial health, identify trends, and make informed decisions that drive growth. Additionally, accurate bookkeeping helps maintain compliance with tax regulations, avoiding potential penalties and audits. Embrace precise bookkeeping practices to ensure your business thrives in today's competitive market."
  },
  {
    date: "2024-06-05",
    title: "Automating Your Bookkeeping: Benefits and Best Practices",
    shortDescription: "Learn how automation can streamline your bookkeeping process.",
    description: "Automation in bookkeeping reduces errors, saves time, and increases efficiency.",
    longDescription: "Automating your bookkeeping process offers numerous benefits, including reduced errors, time savings, and increased efficiency. By leveraging technology, businesses can automate repetitive tasks such as data entry, reconciliations, and report generation. This not only frees up valuable time but also minimizes the risk of human error. Implementing best practices for automation, such as choosing the right software and integrating it with your existing systems, ensures a smooth transition and maximizes the benefits. Explore how automation can transform your bookkeeping and boost your business's productivity."
  },
  {
    date: "2024-06-10",
    title: "Managing Cash Flow Effectively",
    shortDescription: "Strategies to maintain a healthy cash flow for your business.",
    description: "Effective cash flow management is essential for business stability and growth.",
    longDescription: "Managing cash flow effectively is vital for the stability and growth of any business. It involves monitoring the inflows and outflows of cash to ensure that there are enough funds to cover expenses and invest in opportunities. Key strategies include forecasting cash flow, maintaining a cash reserve, and optimizing accounts receivable and payable. By staying on top of your cash flow, you can avoid financial shortfalls and take advantage of growth opportunities. Implementing robust cash flow management practices helps ensure that your business remains financially healthy and resilient."
  },
  {
    date: "2024-06-15",
    title: "Understanding Financial Statements",
    shortDescription: "A guide to interpreting and using financial statements for business decisions.",
    description: "Financial statements provide crucial insights into your business's financial health.",
    longDescription: "Understanding financial statements is essential for making informed business decisions. These statements, including the balance sheet, income statement, and cash flow statement, offer a comprehensive view of your business's financial health. The balance sheet provides a snapshot of your assets, liabilities, and equity, while the income statement shows your revenues and expenses over a period. The cash flow statement highlights the inflows and outflows of cash. By interpreting these statements, you can assess your business's performance, identify areas for improvement, and make strategic decisions that drive growth and profitability."
  },
  {
    date: "2024-06-20",
    title: "The Role of a Bookkeeper in Small Businesses",
    shortDescription: "Explore how bookkeepers support small business success.",
    description: "Bookkeepers play a crucial role in maintaining accurate financial records for small businesses.",
    longDescription: "The role of a bookkeeper is crucial for the success of small businesses. Bookkeepers are responsible for maintaining accurate financial records, tracking expenses, and ensuring compliance with tax regulations. They provide valuable insights into the financial health of the business, helping owners make informed decisions. Additionally, bookkeepers prepare financial reports that are essential for strategic planning and securing funding. By outsourcing bookkeeping, small business owners can focus on their core operations while ensuring their financial records are in expert hands. Explore the various ways bookkeepers support small business success and contribute to their growth."
  },
  {
    date: "2024-06-25",
    title: "Tax Preparation Tips for Small Businesses",
    shortDescription: "Essential tips to simplify tax preparation for your small business.",
    description: "Effective tax preparation ensures compliance and maximizes deductions for small businesses.",
    longDescription: "Tax preparation can be a daunting task for small businesses, but with the right strategies, it can be simplified. Effective tax preparation involves maintaining organized financial records, understanding tax regulations, and maximizing deductions. Key tips include keeping track of all expenses, staying updated with tax law changes, and consulting with a tax professional. Proper tax preparation ensures compliance with regulations and can result in significant savings for your business. By implementing these tips, you can streamline the tax preparation process and focus on growing your business with confidence."
  }
];

function Page() {
  const router = useRouter();
  const { query } = router;
  const projectId = query.id; // Assuming your URL is /chat/1, `query.id` will give you `1`.
  const projectIdNumber = parseInt(projectId as string, 10);

  // Find the post with the matching ID
  const post = blogPosts.find(post => post.date === `2024-06-${projectIdNumber.toString().padStart(2, '0')}`);

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.shortDescription}</p>
      <p>{post.date}</p>
      <p>{post.description}</p>
      <p>{post.longDescription}</p>
    </div>
  );
}

export default Page;
