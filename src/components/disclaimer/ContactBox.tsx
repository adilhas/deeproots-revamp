const ContactBox = () => (
  <div className="bg-[#EFF8FF] dark:bg-[#194185] border border-[#EFF8FF] dark:border-[#53B1FD] p-4 rounded-md mt-10 text-center">
    <p className="font-medium">📩 CONTACT INFORMATION</p>
    <p className="text-sm mt-2">
      For legal or compliance inquiries, please contact:
    </p>
    <a
      href={`mailto:admin@deeproots.earth`}
      className="text-blue-600 dark:text-blue-400 underline font-semibold text-sm"
    >
      admin@deeproots.earth
    </a>
  </div>
);

export default ContactBox;
