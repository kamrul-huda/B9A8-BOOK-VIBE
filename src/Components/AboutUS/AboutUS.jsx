const AboutUS = () => {
  return (
    <div>
      <div className="bg-[#1313130D] rounded-3xl p-2 mx-1 mt-6 lg:p-10">
        <h2 className="text-[#131313] playfair font-extrabold text-3xl text-center mb-8">
          About Us
        </h2>
        <p className="workSans text-[#131313B3] text-center mx-6 lg:mx-32">
          Welcome to Book Haven, your ultimate online destination for book
          lovers everywhere! At Book Haven, we believe in the magic of stories
          and the power of knowledge. Our mission is to make books accessible to
          everyone, no matter where you are.
        </p>
      </div>

      <div className="p-10 space-y-5">
        <div className="flex items-center my-5">
          <hr className="border-2 border-[#23BE0A] w-1/6" />
          <h2 className="text-[#131313] playfair font-extrabold text-2xl flex-1 pl-8 tracking-wider">
            Who We Are
          </h2>
        </div>
        <p className="workSans text-[#131313B3]">
          Founded in 2023 by a group of passionate readers and tech enthusiasts,
          Book Haven is more than just an online bookstore. We are a community
          of book enthusiasts who value the written word and the joy it brings.
          Our team is dedicated to curating a diverse selection of books that
          cater to all ages, tastes, and interests.
        </p>
        <div className="flex items-center my-10">
          <hr className="border-2 border-[#23BE0A] w-1/6" />
          <h2 className="text-[#131313] playfair font-extrabold text-2xl flex-1 pl-8 tracking-wider">
            What We Offer
          </h2>
        </div>
        <ul className="list-disc pl-2 lg:pl-10">
          <li>
            <span className="text-[#131313] workSans font-semibold text-lg">
              Extensive Collection:
            </span>
            <span className="workSans text-[#131313B3] pl-2">
              Whether you are looking for the latest bestsellers, timeless
              classics, or hard-to-find rare editions, our extensive catalog has
              something for every reader.
            </span>
          </li>
          <li>
            <span className="text-[#131313] workSans font-semibold text-lg">
              User-Friendly Experience:{" "}
            </span>
            <span className="workSans text-[#131313B3] pl-2">
              Our website is designed with you in mind. Easily browse, search,
              and discover new books with our intuitive interface.
            </span>
          </li>
          <li>
            <span className="text-[#131313] workSans font-semibold text-lg">
              Personalized Recommendations:
            </span>
            <span className="workSans text-[#131313B3] pl-2">
              Our smart recommendation engine suggests books based on your
              reading history and preferences, ensuring you always find
              something you’ll love.
            </span>
          </li>
          <li>
            <span className="text-[#131313] workSans font-semibold text-lg">
              Exclusive Deals and Discounts:
            </span>
            <span className="workSans text-[#131313B3] pl-2">
              We regularly offer special promotions, discounts, and exclusive
              deals to make your reading experience affordable.
            </span>
          </li>
          <li>
            <span className="text-[#131313] workSans font-semibold text-lg">
              Community and Engagement:
            </span>
            <span className="workSans text-[#131313B3] pl-2">
              Join our vibrant community of readers! Participate in book
              discussions, reviews, and virtual book clubs. Share your thoughts
              and connect with fellow book lovers.
            </span>
          </li>
        </ul>
        <div className="flex items-center my-10">
          <hr className="border-2 border-[#23BE0A] w-1/6" />
          <h2 className="text-[#131313] playfair font-extrabold text-2xl flex-1 pl-8 tracking-wider">
            Our Values
          </h2>
        </div>
        <ul className="list-disc  pl-2 lg:pl-10">
          <li>
            <span className="text-[#131313] workSans font-semibold text-lg">
              Customer Satisfaction:
            </span>
            <span className="workSans text-[#131313B3] pl-2">
              Your satisfaction is our top priority. We strive to provide
              excellent customer service and support. If you have any questions
              or concerns, our friendly team is here to help.
            </span>
          </li>
          <li>
            <span className="text-[#131313] workSans font-semibold text-lg">
              Quality and Authenticity:
            </span>
            <span className="workSans text-[#131313B3] pl-2">
              We take pride in the quality of our books and the authenticity of
              our sources. Every book you purchase from us is guaranteed to be
              genuine and of high quality.
            </span>
          </li>
          <li>
            <span className="text-[#131313] workSans font-semibold text-lg">
              Sustainability:
            </span>
            <span className="workSans text-[#131313B3] pl-2">
              We are committed to sustainable practices. From eco-friendly
              packaging to supporting authors and publishers who promote
              sustainable initiatives, we aim to reduce our environmental
              footprint.
            </span>
          </li>
        </ul>
        <div className="flex items-center my-10">
          <hr className="border-2 border-[#23BE0A] w-1/6" />
          <h2 className="text-[#131313] playfair font-extrabold text-2xl flex-1 pl-8 tracking-wider">
            Our Journey
          </h2>
        </div>
        <p className="workSans text-[#131313B3]">
          Book Haven started as a small project among friends who shared a deep
          love for books. Over time, our passion and dedication have helped us
          grow into a trusted online bookstore with a loyal customer base. We
          are continuously evolving, adding new features, and expanding our
          catalog to meet the ever-changing needs of our readers.
        </p>
        <div className="flex items-center my-10">
          <hr className="border-2 border-[#23BE0A] w-1/6" />
          <h2 className="text-[#131313] playfair font-extrabold text-2xl flex-1 pl-8 tracking-wider">
            Join Us
          </h2>
        </div>
        <p className="workSans text-[#131313B3]">
          We invite you to explore our website, dive into our vast collection of
          books, and become a part of the Book Haven family. Whether you are a
          casual reader, a literary enthusiast, or someone just beginning their
          reading journey, Book Haven is here to inspire and support your love
          for books.
        </p>
        <p className="workSans text-[#131313B3]">
          Thank you for choosing Book Haven. Happy reading!
        </p>
      </div>
    </div>
  );
};

export default AboutUS;
