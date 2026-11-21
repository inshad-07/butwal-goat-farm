export default function Map() {
  return (
    <section className="w-full pb-12 md:pb-16 font-sans">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-8 max-w-2xl text-center">
       
          <h2 className="mb-4 text-2xl font-[350] leading-tight text-[#1A3322] md:text-4xl">
            Find Us on Map
          </h2>
          <p className="mx-auto max-w-xl text-[15px] leading-relaxed text-gray-600">
            Visit our goat farm located in Butwal, Rupandehi District, Lumbini Province, Nepal. We're
            easily accessible and welcome visitors interested in our premium goat
            breeding services.
          </p>
        </div>
        <div className="w-full overflow-hidden rounded-md border border-gray-200">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.9091232583687!2d83.4629186!3d27.689203499999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399687edcde74c03%3A0x2c540ace924c8a3d!2zTmV3IEJlc3QgTW9kZXJuIFRhaWxvcnMg4KSo4KWN4KSv4KWCIOCkrOClh-Ckt-CljeCknyDgpK7gpYvgpKHgpLDgpY3gpKgg4KSf4KWH4KSy4KSw4KWN4KS4!5e0!3m2!1sen!2sin!4v1794819040012!5m2!1sen!2sin"
            width="600"
            height="400"
            style={{ border: 0, height: '400px' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
            className="w-full"
          />
        </div>
      </div>
    </section>
  );
}
