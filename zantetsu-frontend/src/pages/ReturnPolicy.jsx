export default function ReturnPolicy() {
  return (
    <section className="px-6 py-16 bg-bgSoft text-bgLight font-body leading-relaxed border-b border-bgMuted">
      <div className="max-w-4xl mx-auto">
        {/* Title */}
        <h1 className="text-4xl font-heading text-center text-accentGold mb-8">
          Return & Refund Policy
        </h1>
        <p className="text-center text-sm text-gray-400 mb-12">
          Effective Date: 20th Aug, 2025
        </p>

        {/* Policy Content */}
        <div className="space-y-10">
          {/* Intro */}
          <p>
            At <span className="font-semibold text-accentGold">Zantetsu</span>,
            we want you to be completely satisfied with your purchase. If you
            are not happy with your order, we're here to help.
          </p>

          {/* Exchange Policy */}
          <div>
            <h2 className="text-2xl font-subheading text-highlight mb-4">
              1. Exchange Policy
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li>
                <span className="font-semibold text-accentGold">
                  Eligibility:
                </span>{" "}
                Products can be exchanged if you receive the wrong size or if
                there is a defect. Requests must be raised within 48 hours of
                delivery.
              </li>
              <li>
                Exchanges can only be made for the{" "}
                <span className="font-semibold">
                  same product in a different size
                </span>
                . Different products/designs are not permitted.
              </li>
              <li>
                <span className="text-highlight">Clearance Sale</span> items are{" "}
                <span className="font-semibold">
                  NON-RETURNABLE and NON-EXCHANGEABLE
                </span>
                .
              </li>
              <li>
                One free exchange for wrong size/defective products. For other
                size issues, customer bears shipping cost:
                <ul className="list-disc list-inside ml-6 space-y-1">
                  <li>Oversized T-shirts: Rs. 100</li>
                  <li>Hoodies: Rs. 150</li>
                </ul>
              </li>
              <li>
                Each product is eligible for{" "}
                <span className="font-semibold">one exchange only</span>.
              </li>
              <li>
                Please verify sizes using our{" "}
                <span className="underline">Size Chart</span> before ordering.
              </li>
              <li>
                To initiate, contact us at{" "}
                <a
                  href="mailto:support@zantetsu.store"
                  className="text-accentGold underline"
                >
                  support@zantetsu.store
                </a>{" "}
                with order details & photos.
              </li>
            </ul>
          </div>

          {/* Returns */}
          <div>
            <h2 className="text-2xl font-subheading text-highlight mb-4">
              2. Returns for Defective or Incorrect Products
            </h2>
            <p className="text-gray-300">
              If you receive a defective product or the wrong item, you can
              request a return/replacement within{" "}
              <span className="font-semibold">48 hours</span> of delivery.
              Contact us with photos and your order number. Pickup will be
              arranged (subject to availability).
            </p>
            <p className="mt-2 text-highlight">
              Clearance Sale items are non-returnable & non-exchangeable.
            </p>
          </div>

          {/* Refunds */}
          <div>
            <h2 className="text-2xl font-subheading text-highlight mb-4">
              3. Refunds
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li>
                Refunds are only applicable for{" "}
                <span className="font-semibold">
                  defective or incorrect items
                </span>
                .
              </li>
              <li>
                Once returned item is inspected, we’ll notify you of approval or
                rejection.
              </li>
              <li>
                Approved refunds are processed back to the original payment
                method within a few days.
              </li>
            </ul>
          </div>

          {/* Shipping Costs */}
          <div>
            <h2 className="text-2xl font-subheading text-highlight mb-4">
              4. Shipping Costs
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li>We cover shipping costs for defective/incorrect products.</li>
              <li>
                For size exchanges, customer bears Rs. 100 (T-shirts) or Rs. 150
                (Hoodies).
              </li>
              <li>
                Pickup will be attempted once. If unsuccessful, customer must
                self-ship to our address.
              </li>
            </ul>
          </div>

          {/* Return Conditions */}
          <div>
            <h2 className="text-2xl font-subheading text-highlight mb-4">
              5. Return Conditions
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li>
                Products must be returned in{" "}
                <span className="font-semibold">original condition</span> as
                shipped.
              </li>
              <li>
                Reverse pickup is subject to service availability in your area.
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h2 className="text-2xl font-subheading text-highlight mb-4">
              6. Contact Us
            </h2>
            <p className="text-gray-300">
              For any questions, please reach out at:{" "}
              <a
                href="mailto:support@zantetsu.store"
                className="text-accentGold underline"
              >
                support@zantetsu.store
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
