import { icons } from "../../assets/assets";

export default function Services() {
  return (
    <section className="px-6 py-16 bg-bgSoft text-bgLight grid gap-10 md:grid-cols-2 lg:grid-cols-4">
      <Service
        Icon={icons.FaBoxOpen}
        title="Cash on Delivery"
        children={<>Shop now, pay later with our convenient COD option.</>}
      />
      <Service
        Icon={icons.FaCheckCircle}
        title="100% True to Pictures"
        children={<>Shop with confidence – what you see is what you get.</>}
      />
      <Service
        Icon={icons.FaStar}
        title="Product Quality Checked"
        children={<>We take product quality seriously, so you don’t have to.</>}
      />
      <Service
        Icon={icons.MdSupportAgent}
        title="Elite Customer Support"
        children={
          <>
            <span className="flex items-center gap-2">
              <icons.MdEmail /> care@zantetsu.com
            </span>
            <span className="flex items-center gap-2">
              <icons.MdPhone /> +91 98765 43210
            </span>
          </>
        }
      />
    </section>
  );
}

function Service({ Icon, title, children }) {
  return (
    <div className="flex flex-col items-center text-center space-y-3">
      <Icon className="text-4xl text-highlight" />
      <h3 className="font-subheading text-xl font-semibold">{title}</h3>
      <p className="text-sm text-gray-300 flex flex-col items-center">
        {children}
      </p>
    </div>
  );
}
