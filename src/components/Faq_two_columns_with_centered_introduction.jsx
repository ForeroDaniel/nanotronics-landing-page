const faqs = [
  {
    id: 1,
    question: 'Lunes a viernes ',
    answer: 'de 09:00 a 20:00 horas.',
  },
  {
    id: 2,
    question: 'Sábado',
    answer: 'de 10:00 a 20:00 horas.',
  },
  {
    id: 3,
    question: 'Domingo',
    answer: 'de 10:00 a 19:00 horas.',
  },

  // More questions...
];

export default function Faq() {
  return (
    <div className='bg-white'>
      <div className='mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8'>
        <div className='mx-auto max-w-2xl text-center'>
          <h2 className='text-2xl font-bold leading-10 tracking-tight text-gray-900'>
            Horarios de Atención al Cliente
          </h2>
          <p className='mt-6 text-base leading-7 text-gray-600'>
            Conoce los horarios de nuestro equipo de expertos.
          </p>
        </div>
        <div className='mt-20'>
          <dl className='flex flex-col items-center '>
            {faqs.map(faq => (
              <div key={faq.id} className='pb-10'>
                <dt className='text-base font-semibold leading-7 text-gray-900'>
                  {faq.question}
                </dt>
                <dd className='mt-2 text-base leading-7 text-gray-600'>
                  {faq.answer}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
