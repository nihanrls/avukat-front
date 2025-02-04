export default function ConsultForm() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const subject = encodeURIComponent(formData.get('topic') as string);
    const message = encodeURIComponent(
      `Yaş: ${formData.get('age')}\nMesaj: ${formData.get('message')}`
    );
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=umut3a5@gmail.com&su=${subject}&body=${message}`;
    window.open(gmailUrl, '_blank');
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-6 space-y-4">
      <div className="space-y-2">
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          E-posta Adresiniz
        </label>
        <input
          type="email"
          name="email"
          id="email"
          required
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="age" className="block text-sm font-medium text-gray-700">
          Yaşınız
        </label>
        <input
          type="number"
          name="age"
          id="age"
          required
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="topic" className="block text-sm font-medium text-gray-700">
          Danışmak İstediğiniz Konu
        </label>
        <input
          type="text"
          name="topic"
          id="topic"
          required
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="message" className="block text-sm font-medium text-gray-700">
          Mesajınız
        </label>
        <textarea
          name="message"
          id="message"
          rows={4}
          required
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors duration-200 ease-in-out shadow-md hover:shadow-lg"
      >
        Gönder
      </button>
    </form>
  );
}
