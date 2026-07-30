export type PolicyBlock = {
  num?: string;
  text?: string;
  items?: string[];
  bullet?: boolean;
  definition?: boolean;
  company?: string[];
};

export type PolicySection = {
  title: string;
  blocks: PolicyBlock[];
};

export type PolicyDoc = {
  slug: string;
  title: string;
  effectiveDate: string;
  intro: PolicyBlock[];
  company: string[];
  sections: PolicySection[];
};

export const policies: PolicyDoc[] = [
  {
    "slug": "terms",
    "title": "Terms and Conditions",
    "effectiveDate": "Effective date: 28 July 2026",
    "intro": [
      {
        "text": "These Terms and Conditions (“Terms”) govern your access to and use of the Esim-Ex website, platform, account area, wallet and balance features, checkout flow, digital delivery process, customer support tools, and related digital eSIM services available at https://www.esim-ex.com (the “Service”)."
      },
      {
        "text": "The Service is operated by:"
      },
      {
        "text": "Throughout these Terms, “Company”, “Esim-Ex”, “we”, “us”, and “our” refer to ESIMEX LTD. “You” and “your” refer to the consumer, business, individual, or legal entity accessing or using the Service."
      },
      {
        "text": "By accessing or using the Service, creating an Account, topping up Wallet Balance, purchasing an eSIM Plan, receiving a QR Code, installing or activating an eSIM, or otherwise placing an Order through the Service, you agree to be bound by these Terms."
      },
      {
        "text": "If you do not agree to these Terms, you must not use the Service."
      },
      {
        "text": "Nothing in these Terms limits or excludes any mandatory rights or remedies available to you under applicable consumer protection law."
      }
    ],
    "company": [
      "ESIMEX LTD",
      "Company number: 17173983",
      "Registered office: Dept 6750, 196 High Road, Wood Green, London, United Kingdom, N22 8HH",
      "Email: info@esim-ex.com",
      "Phone: +44 7447 196114"
    ],
    "sections": [
      {
        "title": "Definitions",
        "blocks": [
          {
            "text": "For the purposes of these Terms:"
          },
          {
            "text": "Account means your registered user account on the Service, where account functionality is available.",
            "definition": true
          },
          {
            "text": "Activated eSIM Plan means an eSIM Plan that has been installed, activated, connected to a supported network, or otherwise commenced in accordance with the applicable Plan Details.",
            "definition": true
          },
          {
            "text": "Digital Delivery means electronic delivery of an eSIM, QR Code, activation code, installation details, Plan Details, setup instructions, or related digital access information by email or another digital method designated by us.",
            "definition": true
          },
          {
            "text": "eSIM means an embedded digital SIM profile that may be installed on a compatible device without using a physical SIM card.",
            "definition": true
          },
          {
            "text": "eSIM Plan means a digital mobile connectivity package made available through the Service, which may include a specified destination, region, coverage area, data allowance, validity period, activation rules, supported networks, and other plan-specific conditions.",
            "definition": true
          },
          {
            "text": "Order means a completed purchase of Wallet Balance, a completed purchase of an eSIM Plan, or another paid transaction completed through the Service.",
            "definition": true
          },
          {
            "text": "Plan Details means the destination, duration, data allowance, supported country or region, activation method, validity period, network information, restrictions, and other conditions displayed on the Service or provided to you at or before purchase.",
            "definition": true
          },
          {
            "text": "Prohibited Jurisdiction means any country, territory, region, person, organisation, entity, or location to which we do not provide the Service because of legal, regulatory, sanctions-related, supplier, payment provider, network, security, or commercial restrictions.",
            "definition": true
          },
          {
            "text": "QR Code means the digital QR code or equivalent activation details used to install or activate an eSIM Plan on a Supported Device.",
            "definition": true
          },
          {
            "text": "Service means all websites, products, plans, checkout pages, Account features, Wallet Balance features, digital delivery tools, content, functionality, support tools, and related services made available by or through Esim-Ex.",
            "definition": true
          },
          {
            "text": "Supported Device means a device that is eSIM-compatible, network-unlocked where required, technically compatible with the selected eSIM Plan, and capable of installing and using the relevant eSIM.",
            "definition": true
          },
          {
            "text": "Third-Party Network Provider means a mobile network operator, carrier, telecom provider, roaming partner, eSIM aggregator, infrastructure provider, or other third party involved in providing connectivity, provisioning, or network access.",
            "definition": true
          },
          {
            "text": "Used eSIM Plan means an eSIM Plan where data has been consumed, its validity period has started, it has connected to a supported network, or it has otherwise been used.",
            "definition": true
          },
          {
            "text": "Wallet Balance or Balance means prepaid value recorded in your Account and available for use only within the Service to purchase eligible eSIM Plans or related digital services.",
            "definition": true
          }
        ]
      },
      {
        "title": "Eligibility and Account Registration",
        "blocks": [
          {
            "num": "2.1",
            "text": "You must be at least 18 years old to use the Service, create an Account, top up Wallet Balance, or place an Order."
          },
          {
            "num": "2.2",
            "text": "If you use the Service on behalf of a company, organisation, or other legal entity, you represent and warrant that you have authority to bind that entity to these Terms."
          },
          {
            "num": "2.3",
            "text": "You must provide accurate, current, and complete information when creating an Account, placing an Order, topping up Wallet Balance, requesting support, or otherwise using the Service."
          },
          {
            "num": "2.4",
            "text": "You are responsible for maintaining the confidentiality of your login credentials and for all activity carried out through your Account."
          },
          {
            "num": "2.5",
            "text": "You must promptly notify us at info@esim-ex.com if you suspect:",
            "items": [
              "(a) unauthorised access to your Account",
              "(b) unauthorised payment activity",
              "(c) misuse of your email address",
              "(d) theft or unauthorised use of a QR Code",
              "(e) any other Account or security breach."
            ]
          },
          {
            "num": "2.6",
            "text": "We may refuse registration, request verification, restrict access, limit Orders, or suspend an Account where reasonably necessary for security, fraud prevention, abuse prevention, payment integrity, sanctions compliance, supplier restrictions, legal compliance, or operational reasons."
          }
        ]
      },
      {
        "title": "Nature of the Service",
        "blocks": [
          {
            "num": "3.1",
            "text": "Esim-Ex provides digital eSIM connectivity services for travellers and other users who need mobile data access in supported destinations."
          },
          {
            "num": "3.2",
            "text": "The Service is provided digitally only. Unless expressly stated otherwise, we do not sell or deliver physical SIM cards, physical vouchers, or other physical goods."
          },
          {
            "num": "3.3",
            "text": "eSIM Plans may be country-specific, regional, or global and may vary by:",
            "items": [
              "(a) price",
              "(b) destination or coverage area",
              "(c) validity period",
              "(d) data allowance",
              "(e) supported networks",
              "(f) activation method",
              "(g) fair use restrictions",
              "(h) other plan-specific conditions."
            ]
          },
          {
            "num": "3.4",
            "text": "Unless expressly stated otherwise in the relevant Plan Details, eSIM Plans are data-only."
          },
          {
            "num": "3.5",
            "text": "You should not assume that an eSIM Plan includes:",
            "items": [
              "(a) voice calls",
              "(b) SMS",
              "(c) a local telephone number",
              "(d) emergency calling",
              "(e) inbound calls",
              "(f) mobile services other than data."
            ]
          },
          {
            "num": "3.6",
            "text": "The Service relies on Third-Party Network Providers, payment processors, telecom infrastructure providers, eSIM aggregators, email providers, hosting providers, security providers, and other technical partners."
          },
          {
            "num": "3.7",
            "text": "We act as a digital provider, reseller, or facilitator of eSIM connectivity products supplied through third-party telecom networks. We do not own or control all underlying mobile networks, radio infrastructure, roaming arrangements, coverage areas, or local network policies."
          },
          {
            "num": "3.8",
            "text": "We may change, update, improve, limit, suspend, remove, or discontinue parts of the Service for legal, technical, security, operational, supplier-related, network-related, or commercial reasons."
          },
          {
            "num": "3.9",
            "text": "We do not guarantee that every destination, eSIM Plan, supported network, currency, payment method, price, promotion, or Service feature will remain available at all times."
          }
        ]
      },
      {
        "title": "Wallet Balance",
        "blocks": [
          {
            "num": "4.1",
            "text": "Where available, Wallet Balance allows you to prepay value into your Account and use it within the Service to purchase eligible eSIM Plans or related digital services."
          },
          {
            "num": "4.2",
            "text": "Wallet Balance is an internal prepaid account balance for use only within Esim-Ex."
          },
          {
            "num": "4.3",
            "text": "Wallet Balance is not:",
            "items": [
              "(a) legal tender",
              "(b) electronic money",
              "(c) a payment instrument",
              "(d) a bank account or bank deposit",
              "(e) an investment or security",
              "(f) a cryptoasset",
              "(g) a regulated financial product."
            ]
          },
          {
            "num": "4.4",
            "text": "Wallet Balance:",
            "items": [
              "(a) does not accrue interest",
              "(b) has no cash value outside the Service",
              "(c) cannot ordinarily be withdrawn as cash",
              "(d) cannot be transferred to another person unless we expressly agree otherwise",
              "(e) cannot be resold, exchanged, pledged, assigned, or commercially exploited",
              "(f) may only be used in accordance with these Terms."
            ]
          },
          {
            "num": "4.5",
            "text": "Purchased Wallet Balance is normally credited to your Account after successful payment authorisation and processing."
          },
          {
            "num": "4.6",
            "text": "Wallet Balance is deducted when you confirm the purchase of an eSIM Plan, when the plan is provisioned, or when performance of the relevant digital service begins."
          },
          {
            "num": "4.7",
            "text": "Unless expressly stated otherwise, paid Wallet Balance does not expire while:",
            "items": [
              "(a) your Account remains open and in good standing",
              "(b) the Service remains operational",
              "(c) we remain able to provide eligible services for which the Balance can reasonably be used."
            ]
          },
          {
            "num": "4.8",
            "text": "The statement that paid Wallet Balance does not ordinarily expire does not mean that the Service will operate indefinitely or that your Account can never be closed."
          },
          {
            "num": "4.9",
            "text": "Wallet Balance is generally non-refundable once used, except where:",
            "items": [
              "(a) refund is required by applicable consumer law",
              "(b) you validly cancel an unused Wallet Balance purchase within an applicable statutory cooling-off period",
              "(c) a technical issue attributable to us permanently prevents you from using the paid Balance",
              "(d) we permanently discontinue the Service and you cannot reasonably use the remaining paid Balance",
              "(e) Wallet Balance was credited or deducted incorrectly",
              "(f) the relevant payment was duplicated",
              "(g) we expressly agree otherwise."
            ]
          },
          {
            "num": "4.10",
            "text": "If you voluntarily close your Account outside any applicable statutory cancellation period, you should use any remaining Wallet Balance before closure. Unused Balance will not ordinarily be redeemable for cash unless clause 4.9 applies."
          },
          {
            "num": "4.11",
            "text": "Promotional, bonus, referral, trial, or goodwill Balance:",
            "items": [
              "(a) is not a cash purchase",
              "(b) is non-transferable",
              "(c) has no cash value",
              "(d) may be subject to separate restrictions or expiry periods",
              "(e) is not refundable unless required by law."
            ]
          },
          {
            "num": "4.12",
            "text": "We may correct, freeze, reverse, or remove Wallet Balance affected by:",
            "items": [
              "(a) fraud or abuse",
              "(b) chargeback or payment reversal",
              "(c) unauthorised payment activity",
              "(d) duplicate crediting",
              "(e) manifest error",
              "(f) technical malfunction",
              "(g) legal or regulatory obligation."
            ]
          }
        ]
      },
      {
        "title": "Pricing, Taxes, Payments, and Billing",
        "blocks": [
          {
            "num": "5.1",
            "text": "Prices, Wallet Balance top-up amounts, currencies, and payment methods are those displayed on the Service or at checkout at the time of your Order."
          },
          {
            "num": "5.2",
            "text": "All prices displayed to consumers are final consumer prices and include any VAT or other sales taxes that Esim-Ex is required to charge, unless the Service expressly states otherwise before you place the Order."
          },
          {
            "num": "5.3",
            "text": "No additional tax charged by Esim-Ex will be added after you confirm the final checkout price, except where:",
            "items": [
              "(a) required because information supplied by you was incorrect",
              "(b) required by a change in law",
              "(c) you expressly agree to the additional amount before payment."
            ]
          },
          {
            "num": "5.4",
            "text": "Your bank, card issuer, or payment provider may apply:",
            "items": [
              "(a) foreign transaction fees",
              "(b) currency conversion fees or spreads",
              "(c) international card fees",
              "(d) other third-party charges."
            ]
          },
          {
            "text": "These charges are outside our control and are not charged by Esim-Ex."
          },
          {
            "num": "5.5",
            "text": "By submitting payment details, you represent and warrant that:",
            "items": [
              "(a) you are authorised to use the selected payment method",
              "(b) the payment information is accurate and complete",
              "(c) sufficient funds or credit are available",
              "(d) the payment is not fraudulent, unauthorised, or unlawful."
            ]
          },
          {
            "num": "5.6",
            "text": "Payments may be subject to:",
            "items": [
              "(a) payment authorisation",
              "(b) fraud screening",
              "(c) security verification",
              "(d) 3D Secure or similar authentication",
              "(e) payment-provider checks",
              "(f) sanctions and compliance screening."
            ]
          },
          {
            "num": "5.7",
            "text": "We may decline, hold, cancel, or reverse an Order where reasonably necessary for:",
            "items": [
              "(a) fraud prevention",
              "(b) payment security",
              "(c) sanctions or legal compliance",
              "(d) payment provider restrictions",
              "(e) supplier restrictions",
              "(f) manifest pricing errors",
              "(g) technical or operational issues."
            ]
          },
          {
            "num": "5.8",
            "text": "You must contact us promptly at info@esim-ex.com if you believe that you have been charged incorrectly."
          }
        ]
      },
      {
        "title": "Orders and Digital Delivery",
        "blocks": [
          {
            "num": "6.1",
            "text": "Placing an Order"
          },
          {
            "num": "6.1.1",
            "text": "All Orders are subject to our acceptance."
          },
          {
            "num": "6.1.2",
            "text": "An Order for Wallet Balance is placed when you complete checkout and your payment is successfully authorised."
          },
          {
            "num": "6.1.3",
            "text": "An Order for an eSIM Plan is placed when:",
            "items": [
              "(a) you select the relevant eSIM Plan",
              "(b) you provide the required Order information",
              "(c) you complete payment or use available Wallet Balance",
              "(d) you confirm the purchase through the Service."
            ]
          },
          {
            "num": "6.1.4",
            "text": "We may refuse, cancel, reverse, or place an Order on hold in cases of:",
            "items": [
              "(a) suspected fraud or abuse",
              "(b) payment failure",
              "(c) inaccurate information",
              "(d) supplier rejection",
              "(e) technical error",
              "(f) sanctions or legal restrictions",
              "(g) inability to fulfil the selected eSIM Plan."
            ]
          },
          {
            "num": "6.2",
            "text": "Delivery Method"
          },
          {
            "num": "6.2.1",
            "text": "All eSIM Plans are delivered digitally only."
          },
          {
            "num": "6.2.2",
            "text": "Unless expressly stated otherwise, the eSIM Plan will be delivered by email to the email address provided during checkout or associated with your Order."
          },
          {
            "num": "6.2.3",
            "text": "Delivery may include:",
            "items": [
              "(a) a QR Code",
              "(b) manual activation details",
              "(c) installation instructions",
              "(d) Plan Details",
              "(e) other information required to install or use the eSIM."
            ]
          },
          {
            "num": "6.3",
            "text": "Delivery Timeframe"
          },
          {
            "num": "6.3.1",
            "text": "Once payment has been successfully authorised and the Order has been approved, the eSIM Plan is normally generated and sent within 5 minutes."
          },
          {
            "num": "6.3.2",
            "text": "You should allow up to 30 minutes for:",
            "items": [
              "(a) payment confirmation",
              "(b) eSIM purchase or allocation from the relevant supplier",
              "(c) technical provisioning",
              "(d) QR Code generation",
              "(e) preparation and transmission of the delivery email."
            ]
          },
          {
            "num": "6.3.3",
            "text": "Delivery may take longer than 30 minutes where reasonably necessary because of:",
            "items": [
              "(a) payment or identity verification",
              "(b) fraud or security checks",
              "(c) supplier or network delays",
              "(d) technical outages",
              "(e) unusually high demand",
              "(f) incorrect Order information",
              "(g) circumstances outside our reasonable control."
            ]
          },
          {
            "num": "6.3.4",
            "text": "If your eSIM delivery email has not arrived within 30 minutes after successful payment, you should:",
            "items": [
              "(a) check your inbox",
              "(b) check spam, junk, promotions, and filtered folders",
              "(c) confirm that the email address used for the Order is correct",
              "(d) contact us at info@esim-ex.com."
            ]
          },
          {
            "num": "6.4",
            "text": "Completion of Delivery"
          },
          {
            "num": "6.4.1",
            "text": "An eSIM Plan is treated as digitally delivered when the relevant QR Code, activation details, installation details, or comparable digital access information has been sent to the email address associated with your Order or otherwise made electronically available to you."
          },
          {
            "num": "6.4.2",
            "text": "Delivery may be treated as completed even if you do not immediately:",
            "items": [
              "(a) open the email",
              "(b) scan the QR Code",
              "(c) install the eSIM",
              "(d) activate the eSIM",
              "(e) use the data allowance."
            ]
          },
          {
            "num": "6.4.3",
            "text": "You are responsible for:",
            "items": [
              "(a) providing a correct email address",
              "(b) maintaining access to that email address",
              "(c) checking spam and filtered folders",
              "(d) ensuring that your mailbox can receive delivery emails."
            ]
          },
          {
            "num": "6.4.4",
            "text": "We are not responsible for delivery problems caused by:",
            "items": [
              "(a) an incorrect email address provided by you",
              "(b) loss of access to your email account",
              "(c) a full mailbox",
              "(d) email filtering outside our control",
              "(e) user-side device restrictions",
              "(f) your failure to check the relevant inbox."
            ]
          }
        ]
      },
      {
        "title": "eSIM Compatibility, Installation, and Activation",
        "blocks": [
          {
            "num": "7.1",
            "text": "Each eSIM Plan is subject to the Plan Details displayed before purchase or provided at delivery."
          },
          {
            "num": "7.2",
            "text": "Before placing an Order, you are responsible for checking that:",
            "items": [
              "(a) your device supports eSIM",
              "(b) your device is network-unlocked where required",
              "(c) your device supports the technical requirements of the selected plan",
              "(d) your software is sufficiently updated",
              "(e) the selected plan covers your intended destination",
              "(f) the data allowance and validity period meet your needs",
              "(g) you understand when the validity period begins."
            ]
          },
          {
            "num": "7.3",
            "text": "eSIM compatibility may vary by device model, manufacturer, region, operating system, carrier lock status, and device configuration."
          },
          {
            "num": "7.4",
            "text": "A device model may support eSIM in one region or configuration but not in another."
          },
          {
            "num": "7.5",
            "text": "You are responsible for following installation and activation instructions correctly."
          },
          {
            "num": "7.6",
            "text": "Incorrect installation, premature activation, installation on the wrong device, deletion of the eSIM profile, device reset, or changing devices may make recovery, transfer, or reinstallation impossible."
          },
          {
            "num": "7.7",
            "text": "Some eSIM profiles may be:",
            "items": [
              "(a) single-use",
              "(b) non-transferable",
              "(c) installable only once",
              "(d) limited to one Supported Device."
            ]
          },
          {
            "num": "7.8",
            "text": "Depending on the relevant Plan Details, the validity period may start:",
            "items": [
              "(a) at purchase",
              "(b) at Digital Delivery",
              "(c) when the QR Code is scanned",
              "(d) at installation",
              "(e) at activation",
              "(f) on first connection to a supported network."
            ]
          },
          {
            "num": "7.9",
            "text": "Unused data does not roll over, transfer, extend, or convert into cash or Wallet Balance unless expressly stated otherwise."
          },
          {
            "num": "7.10",
            "text": "Coverage, speed, signal quality, latency, and network availability may vary due to factors outside our reasonable control."
          },
          {
            "num": "7.11",
            "text": "Unless expressly stated otherwise, eSIM Plans must not be relied upon as your sole means of emergency communication."
          },
          {
            "num": "7.12",
            "text": "You are responsible for managing your device settings, including:",
            "items": [
              "(a) mobile data selection",
              "(b) roaming settings",
              "(c) SIM priority",
              "(d) APN settings",
              "(e) hotspot settings",
              "(f) the status of your primary SIM."
            ]
          },
          {
            "num": "7.13",
            "text": "We are not responsible for charges imposed by your primary carrier because your device or roaming settings were not configured correctly."
          }
        ]
      },
      {
        "title": "Cancellation Rights and Refunds",
        "blocks": [
          {
            "num": "8.1",
            "text": "Nothing in these Terms limits mandatory consumer rights."
          },
          {
            "num": "8.2",
            "text": "Unused Wallet Balance"
          },
          {
            "num": "8.2.1",
            "text": "A consumer may have the right to cancel a purchase of unused Wallet Balance within 14 days of purchase where applicable law provides such a right."
          },
          {
            "num": "8.2.2",
            "text": "The cancellation right may not apply to the extent that Wallet Balance has already been used, spent, redeemed, or applied to an eSIM Plan."
          },
          {
            "num": "8.2.3",
            "text": "Approved refunds will normally be issued to the original payment method."
          },
          {
            "num": "8.3",
            "text": "Immediate Digital Supply"
          },
          {
            "num": "8.3.1",
            "text": "By purchasing an eSIM Plan and requesting Digital Delivery, you request that we begin supplying digital content and performing the relevant digital service before the end of any statutory cancellation period that might otherwise apply."
          },
          {
            "num": "8.3.2",
            "text": "Where required, you may be asked to confirm that:",
            "items": [
              "(a) you request immediate Digital Delivery",
              "(b) you acknowledge that your cancellation right may be lost once digital supply begins."
            ]
          },
          {
            "num": "8.3.3",
            "text": "Digital supply is treated as having begun once the eSIM, QR Code, activation details, or installation information has been generated, allocated, sent, or made available to you."
          },
          {
            "num": "8.4",
            "text": "Delivered, installed, activated, or used eSIM Plans are generally non-refundable except where:",
            "items": [
              "(a) required by applicable law",
              "(b) we fail to deliver the purchased service",
              "(c) the eSIM Plan is materially defective",
              "(d) the QR Code is invalid or faulty",
              "(e) the delivered plan materially differs from the Plan Details",
              "(f) we cannot provide an appropriate remedy under clause 9",
              "(g) we expressly agree otherwise."
            ]
          },
          {
            "num": "8.5",
            "text": "Refunds will not normally be available merely because:",
            "items": [
              "(a) you changed your mind after Digital Delivery began",
              "(b) you selected the wrong plan or destination",
              "(c) your travel plans changed",
              "(d) your device is incompatible or locked",
              "(e) you activated the plan too early",
              "(f) you installed the plan on the wrong device",
              "(g) you deleted the eSIM profile",
              "(h) you failed to follow the instructions",
              "(i) local network performance was lower than expected but the plan was otherwise substantially as described",
              "(j) your primary carrier charged you because of your device settings."
            ]
          },
          {
            "num": "8.6",
            "text": "Further details are provided in our Refund and Cancellation Policy."
          }
        ]
      },
      {
        "title": "Failure to Deliver, Faulty QR Codes, and Service Remedies",
        "blocks": [
          {
            "num": "9.1",
            "text": "If we fail to deliver an eSIM Plan within the stated delivery timeframe, or if the supplied QR Code, activation details, or eSIM profile is faulty, invalid, materially defective, or materially not as described, you must contact us promptly at info@esim-ex.com."
          },
          {
            "num": "9.2",
            "text": "You should provide:",
            "items": [
              "(a) your Order reference",
              "(b) the email address used for the Order",
              "(c) the relevant eSIM Plan",
              "(d) your device model",
              "(e) your destination",
              "(f) screenshots or error messages where available",
              "(g) a description of the issue."
            ]
          },
          {
            "num": "9.3",
            "text": "We will review relevant payment, delivery, provisioning, supplier, activation, and support records."
          },
          {
            "num": "9.4",
            "text": "Where the problem is attributable to us or our fulfilment chain, we will first use reasonable efforts to provide one or more of the following remedies:",
            "items": [
              "(a) re-send the delivery email",
              "(b) re-deliver the QR Code or activation details",
              "(c) correct the provisioning or technical issue",
              "(d) provide installation or activation support",
              "(e) replace the faulty eSIM Plan with an equivalent functioning plan",
              "(f) restore Wallet Balance incorrectly deducted."
            ]
          },
          {
            "num": "9.5",
            "text": "We will provide the corrective remedy:",
            "items": [
              "(a) within a reasonable time",
              "(b) without additional charge",
              "(c) without causing significant inconvenience where reasonably possible."
            ]
          },
          {
            "num": "9.6",
            "text": "If correction, re-delivery, or replacement is impossible, disproportionate, unsuccessful, or not completed within a reasonable time without significant inconvenience, we may provide:",
            "items": [
              "(a) a full refund",
              "(b) a proportionate refund",
              "(c) an appropriate price reduction",
              "(d) restoration of the relevant Wallet Balance",
              "(e) another remedy agreed with you."
            ]
          },
          {
            "num": "9.7",
            "text": "A full refund will normally apply where:",
            "items": [
              "(a) no usable eSIM Plan was delivered",
              "(b) the supplied QR Code cannot be used because of a fault attributable to us or our supplier",
              "(c) the selected service cannot be provided at all",
              "(d) the delivered plan is materially different from the plan purchased and no acceptable replacement is available."
            ]
          },
          {
            "num": "9.8",
            "text": "A proportionate refund or price reduction may apply where:",
            "items": [
              "(a) part of the service was successfully supplied or used",
              "(b) only part of the data allowance or validity period was affected",
              "(c) another proportionate remedy is reasonable in the circumstances."
            ]
          },
          {
            "num": "9.9",
            "text": "If we cancel an Order before Digital Delivery, we will refund the amount paid or restore the relevant Wallet Balance."
          },
          {
            "num": "9.10",
            "text": "If we permanently discontinue the Service for reasons unrelated to your breach:",
            "items": [
              "(a) undelivered paid Orders will be refunded",
              "(b) unused paid Wallet Balance that can no longer reasonably be used will be refunded",
              "(c) we will use reasonable efforts to allow active eSIM Plans to continue until their original expiry",
              "(d) if an active eSIM Plan is terminated early because of our permanent discontinuation, we will provide an appropriate replacement, proportionate refund, Wallet Balance restoration, or another remedy required by law."
            ]
          },
          {
            "num": "9.11",
            "text": "The remedies in this section do not apply to issues caused solely by:",
            "items": [
              "(a) an incompatible or locked device",
              "(b) incorrect installation",
              "(c) deletion of the eSIM profile",
              "(d) incorrect device settings",
              "(e) use outside the supported destination or validity period",
              "(f) third-party network conditions outside our reasonable control",
              "(g) your breach of these Terms."
            ]
          }
        ]
      },
      {
        "title": "Account Closure and Termination by You",
        "blocks": [
          {
            "num": "10.1",
            "text": "You may request closure of your Account and termination of your ongoing relationship with Esim-Ex by emailing info@esim-ex.com."
          },
          {
            "num": "10.2",
            "text": "You should send the request from the email address associated with your Account where possible."
          },
          {
            "num": "10.3",
            "text": "Our support team will contact you to:",
            "items": [
              "(a) verify the request",
              "(b) confirm your identity where reasonably necessary",
              "(c) identify pending Orders, active eSIM Plans, remaining Wallet Balance, disputes, or outstanding issues",
              "(d) explain the consequences of closure",
              "(e) complete the Account closure process."
            ]
          },
          {
            "num": "10.4",
            "text": "We may delay final closure where reasonably necessary to:",
            "items": [
              "(a) complete a pending Order",
              "(b) investigate fraud or unauthorised activity",
              "(c) resolve a payment dispute or chargeback",
              "(d) comply with legal or accounting obligations",
              "(e) recover an outstanding amount",
              "(f) preserve records required by law."
            ]
          },
          {
            "num": "10.5",
            "text": "Before requesting closure, you should use any remaining Wallet Balance unless you may be entitled to a refund under clause 4.9 or applicable law."
          },
          {
            "num": "10.6",
            "text": "On closure:",
            "items": [
              "(a) your access to the Account may end",
              "(b) unused promotional Balance may be cancelled",
              "(c) undelivered Orders will be reviewed and refunded or completed as appropriate",
              "(d) delivered eSIM Plans may remain subject to their original Plan Details and supplier rules",
              "(e) we may retain records where required for legal, tax, accounting, fraud prevention, dispute, or security purposes."
            ]
          },
          {
            "num": "10.7",
            "text": "Closing your Account does not automatically cancel or refund a delivered, installed, activated, or used eSIM Plan."
          },
          {
            "num": "10.8",
            "text": "Account closure does not affect rights, remedies, payments, disputes, or obligations that arose before closure."
          }
        ]
      },
      {
        "title": "User Responsibilities and Acceptable Use",
        "blocks": [
          {
            "num": "11.1",
            "text": "You are responsible for all destination selections, device details, email addresses, billing information, and instructions submitted through the Service."
          },
          {
            "num": "11.2",
            "text": "You must not use the Service:",
            "items": [
              "(a) unlawfully or fraudulently",
              "(b) to submit false or misleading information",
              "(c) to interfere with the operation or security of the Service",
              "(d) to gain unauthorised access to accounts, systems, or data",
              "(e) to scrape, reverse engineer, or exploit the Service without authorisation",
              "(f) to resell or redistribute eSIM Plans, QR Codes, or Wallet Balance without written permission",
              "(g) to abuse promotions, refunds, support channels, or chargeback processes",
              "(h) to distribute malware, spam, or harmful traffic",
              "(i) to bypass network, geographic, payment, security, or usage restrictions."
            ]
          },
          {
            "num": "11.3",
            "text": "Your use must comply with our Acceptable Use and Fair Use Policy."
          }
        ]
      },
      {
        "title": "Prohibited Jurisdictions, Sanctions, and Restricted Persons",
        "blocks": [
          {
            "num": "12.1",
            "text": "Esim-Ex does not provide, sell, deliver, activate, or support the Service in or for the following Prohibited Jurisdictions:",
            "items": [
              "Sudan",
              "Democratic Republic of the Congo",
              "Iran",
              "Mali",
              "Myanmar (Burma)",
              "North Korea",
              "South Sudan",
              "Syria",
              "Yemen",
              "Afghanistan",
              "Belarus",
              "Central African Republic",
              "Cuba",
              "Haiti",
              "Iraq",
              "Russia",
              "Somalia",
              "Venezuela",
              "Zimbabwe."
            ],
            "bullet": true
          },
          {
            "num": "12.2",
            "text": "The list of Prohibited Jurisdictions may be updated from time to time because of changes in:",
            "items": [
              "(a) applicable law",
              "(b) sanctions or export controls",
              "(c) payment provider requirements",
              "(d) telecom supplier restrictions",
              "(e) network availability",
              "(f) security or fraud risk",
              "(g) our commercial risk policy."
            ]
          },
          {
            "num": "12.3",
            "text": "We also do not provide the Service to:",
            "items": [
              "(a) persons or entities subject to applicable sanctions",
              "(b) persons or entities owned or controlled by sanctioned persons",
              "(c) persons acting on behalf of sanctioned or prohibited persons",
              "(d) persons using the Service for prohibited or unlawful purposes."
            ]
          },
          {
            "num": "12.4",
            "text": "You must not:",
            "items": [
              "(a) purchase an eSIM Plan for use in a Prohibited Jurisdiction",
              "(b) use another person, payment method, IP address, account, or location to circumvent this section",
              "(c) resell or transfer the Service into a Prohibited Jurisdiction",
              "(d) provide false location, billing, identity, or destination information."
            ]
          },
          {
            "num": "12.5",
            "text": "We may refuse, cancel, suspend, or terminate an Order or Account where:",
            "items": [
              "(a) the intended destination is prohibited",
              "(b) the payment method or billing location is connected with a Prohibited Jurisdiction",
              "(c) sanctions or compliance screening identifies a restriction",
              "(d) a supplier or payment provider prevents fulfilment",
              "(e) we reasonably suspect an attempt to circumvent this section."
            ]
          },
          {
            "num": "12.6",
            "text": "Where an Order is cancelled before delivery under this section, we will normally refund the amount paid unless:",
            "items": [
              "(a) payment has been frozen or blocked by law",
              "(b) refund is prohibited",
              "(c) the payment was fraudulent or unauthorised",
              "(d) another lawful restriction applies."
            ]
          }
        ]
      },
      {
        "title": "Third-Party Networks and Services",
        "blocks": [
          {
            "num": "13.1",
            "text": "The Service depends on Third-Party Network Providers, payment processors, hosting providers, email providers, analytics tools, fraud prevention providers, and other external services."
          },
          {
            "num": "13.2",
            "text": "We do not control third-party networks and are not responsible for their independent acts, outages, restrictions, congestion, or policy changes."
          },
          {
            "num": "13.3",
            "text": "Third-party network use may be subject to separate fair use, roaming, security, and technical rules."
          },
          {
            "num": "13.4",
            "text": "Nothing in these Terms makes you a direct contractual counterparty of a Third-Party Network Provider unless expressly stated."
          },
          {
            "num": "13.5",
            "text": "We may change suppliers or providers where reasonably necessary for operational, technical, legal, security, or commercial reasons."
          }
        ]
      },
      {
        "title": "Complaints, Payment Disputes, and Chargebacks",
        "blocks": [
          {
            "num": "14.1",
            "text": "Contacting Us First"
          },
          {
            "num": "14.1.1",
            "text": "If you believe that:",
            "items": [
              "(a) an Order was not delivered",
              "(b) a QR Code is faulty",
              "(c) you were charged incorrectly",
              "(d) a payment was duplicated",
              "(e) Wallet Balance was deducted incorrectly",
              "(f) an eSIM Plan was materially not as described",
              "(g) another payment or service issue occurred,"
            ]
          },
          {
            "text": "you should contact us at info@esim-ex.com before initiating a chargeback where reasonably practicable."
          },
          {
            "num": "14.1.2",
            "text": "Contacting us first gives us the opportunity to investigate and provide re-delivery, correction, replacement, Wallet Balance restoration, or refund where appropriate."
          },
          {
            "num": "14.1.3",
            "text": "Nothing in this section prevents you from exercising a legitimate legal right to contact your bank, card issuer, payment provider, regulator, or court."
          },
          {
            "num": "14.2",
            "text": "Internal Dispute Review"
          },
          {
            "num": "14.2.1",
            "text": "Your complaint should include:",
            "items": [
              "(a) your Order reference",
              "(b) the email address used for the Order",
              "(c) the disputed amount",
              "(d) the reason for the dispute",
              "(e) relevant screenshots, receipts, or error messages",
              "(f) details of any troubleshooting already completed."
            ]
          },
          {
            "num": "14.2.2",
            "text": "We aim to acknowledge a payment or service dispute within 2 business days."
          },
          {
            "num": "14.2.3",
            "text": "We aim to provide a substantive response within 10 business days."
          },
          {
            "num": "14.2.4",
            "text": "Complex matters may take longer where we need information from a payment processor, eSIM supplier, network provider, bank, or other third party. If so, we may provide an update and request additional information."
          },
          {
            "num": "14.3",
            "text": "Chargebacks"
          },
          {
            "num": "14.3.1",
            "text": "A chargeback is a payment dispute initiated through your bank, card issuer, or payment provider."
          },
          {
            "num": "14.3.2",
            "text": "If you initiate a chargeback:",
            "items": [
              "(a) we may pause any overlapping internal refund request",
              "(b) we may restrict the disputed Wallet Balance or undelivered Order while the chargeback is investigated",
              "(c) we may provide evidence to the relevant payment provider",
              "(d) the outcome will be determined under the relevant card or payment scheme rules."
            ]
          },
          {
            "num": "14.3.3",
            "text": "Evidence provided by us may include:",
            "items": [
              "(a) checkout records",
              "(b) payment authorisation and 3D Secure records",
              "(c) Order confirmations",
              "(d) email delivery records",
              "(e) QR Code generation and delivery records",
              "(f) provisioning or activation records",
              "(g) Account activity",
              "(h) IP and security logs",
              "(i) support correspondence",
              "(j) refund or troubleshooting records."
            ]
          },
          {
            "num": "14.3.4",
            "text": "You may not recover the same payment twice through both:",
            "items": [
              "(a) a direct refund from Esim-Ex",
              "(b) a successful chargeback or payment reversal."
            ]
          },
          {
            "num": "14.3.5",
            "text": "If you receive both, you must notify us, and we may recover or reverse the duplicate amount."
          },
          {
            "num": "14.4",
            "text": "Unauthorised and Abusive Disputes"
          },
          {
            "num": "14.4.1",
            "text": "We will not penalise you merely for making a legitimate complaint, refund request, or payment dispute."
          },
          {
            "num": "14.4.2",
            "text": "However, where we reasonably suspect:",
            "items": [
              "(a) fraud",
              "(b) deliberate misrepresentation",
              "(c) repeated unjustified chargebacks",
              "(d) use of an eSIM followed by a false non-delivery claim",
              "(e) use of stolen or unauthorised payment details",
              "(f) refund or promotional abuse,"
            ]
          },
          {
            "text": "we may:",
            "items": [
              "(a) suspend or restrict your Account",
              "(b) cancel pending Orders",
              "(c) reverse related Wallet Balance",
              "(d) refuse future Orders",
              "(e) terminate the Account",
              "(f) submit evidence to payment providers",
              "(g) take lawful recovery or enforcement action."
            ]
          },
          {
            "num": "14.4.3",
            "text": "Any restriction imposed during a dispute will be proportionate to the circumstances and will not limit mandatory consumer rights."
          },
          {
            "num": "14.5",
            "text": "Chargeback Outcomes"
          },
          {
            "num": "14.5.1",
            "text": "If the payment provider resolves the chargeback in your favour, we will comply with the outcome and make any corresponding Account or Wallet Balance adjustment."
          },
          {
            "num": "14.5.2",
            "text": "If the chargeback is rejected or withdrawn, any outstanding amount, reversed Wallet Balance, or Account restriction may remain until the payment position is resolved."
          }
        ]
      },
      {
        "title": "Intellectual Property Rights",
        "blocks": [
          {
            "num": "15.1",
            "text": "All intellectual property rights in the Service, including software, branding, text, graphics, databases, structure, and user interface, are owned by us or licensed to us."
          },
          {
            "num": "15.2",
            "text": "Subject to payment and compliance with these Terms, we grant you a limited, non-exclusive, non-transferable, non-sublicensable licence to use the Service and delivered eSIM materials for lawful personal or internal business use."
          },
          {
            "num": "15.3",
            "text": "You must not:",
            "items": [
              "(a) reproduce, publish, distribute, resell, or commercially exploit the Service",
              "(b) remove proprietary notices",
              "(c) publish or share QR Codes or activation details",
              "(d) use our branding without permission",
              "(e) copy our plan database or Service structure for competitive purposes."
            ]
          }
        ]
      },
      {
        "title": "Service Availability and Technical Issues",
        "blocks": [
          {
            "num": "16.1",
            "text": "We do not guarantee that the website or Service will be uninterrupted or error-free at all times."
          },
          {
            "num": "16.2",
            "text": "We may perform maintenance, security actions, supplier changes, system updates, or technical interventions."
          },
          {
            "num": "16.3",
            "text": "We are not responsible for delays or failures caused by:",
            "items": [
              "(a) internet outages",
              "(b) device issues",
              "(c) email filtering",
              "(d) force majeure",
              "(e) government action",
              "(f) third-party provider failures outside our reasonable control."
            ]
          },
          {
            "num": "16.4",
            "text": "Where delivery or activation fails because of an issue attributable to us or our fulfilment chain, clause 9 applies."
          }
        ]
      },
      {
        "title": "Warranties and Disclaimers",
        "blocks": [
          {
            "num": "17.1",
            "text": "We will provide the Service with reasonable care and skill and in accordance with mandatory consumer law."
          },
          {
            "num": "17.2",
            "text": "Except where expressly stated and to the extent permitted by law, the Service is provided on an “as available” basis."
          },
          {
            "num": "17.3",
            "text": "We do not guarantee:",
            "items": [
              "(a) uninterrupted network service",
              "(b) coverage in every location",
              "(c) a specific speed or latency",
              "(d) support for every device",
              "(e) availability of every network technology",
              "(f) suitability for every personal or business purpose."
            ]
          },
          {
            "num": "17.4",
            "text": "Coverage maps, network names, and speed references are general guidance and may change."
          }
        ]
      },
      {
        "title": "Limitation of Liability",
        "blocks": [
          {
            "num": "18.1",
            "text": "Nothing in these Terms excludes or limits liability for:",
            "items": [
              "(a) death or personal injury caused by negligence",
              "(b) fraud or fraudulent misrepresentation",
              "(c) breach of mandatory consumer rights",
              "(d) any liability that cannot lawfully be excluded."
            ]
          },
          {
            "num": "18.2",
            "text": "If you are a consumer, we are responsible for foreseeable loss or damage caused by our breach of these Terms or failure to use reasonable care and skill."
          },
          {
            "num": "18.3",
            "text": "If you are a business user, our total aggregate liability will not exceed the amount paid by you through the Service during the 12 months preceding the event giving rise to the claim."
          },
          {
            "num": "18.4",
            "text": "Subject to clause 18.1, we are not responsible for losses caused by:",
            "items": [
              "(a) device incompatibility",
              "(b) incorrect plan selection",
              "(c) incorrect installation or premature activation",
              "(d) deletion of the eSIM profile",
              "(e) charges from your primary carrier",
              "(f) third-party network conditions outside our reasonable control",
              "(g) incorrect email information provided by you",
              "(h) unlawful or prohibited use."
            ]
          },
          {
            "num": "18.5",
            "text": "If you are a consumer, this section does not affect rights that cannot lawfully be limited."
          }
        ]
      },
      {
        "title": "Indemnity",
        "blocks": [
          {
            "num": "19.1",
            "text": "To the extent permitted by law, you agree to indemnify the Company against claims, losses, liabilities, and reasonable costs arising from:",
            "items": [
              "(a) your material breach of these Terms",
              "(b) your unlawful or fraudulent use",
              "(c) infringement of third-party rights",
              "(d) unauthorised resale",
              "(e) false or misleading information",
              "(f) abusive payment or chargeback activity."
            ]
          },
          {
            "num": "19.2",
            "text": "This section does not apply to the extent that the claim or loss was caused by our breach, negligence, or unlawful conduct."
          }
        ]
      },
      {
        "title": "Privacy and Data Protection",
        "blocks": [
          {
            "num": "20.1",
            "text": "We process personal data in accordance with our Privacy Policy and applicable data protection law."
          },
          {
            "num": "20.2",
            "text": "Personal data may be processed for:",
            "items": [
              "(a) Account administration",
              "(b) payment handling",
              "(c) Digital Delivery",
              "(d) eSIM provisioning",
              "(e) customer support",
              "(f) fraud prevention",
              "(g) security",
              "(h) legal compliance."
            ]
          },
          {
            "num": "20.3",
            "text": "Relevant information may be shared with telecom providers, payment processors, email providers, hosting providers, fraud prevention providers, and other providers as described in our Privacy Policy."
          }
        ]
      },
      {
        "title": "Suspension and Termination by Us",
        "blocks": [
          {
            "num": "21.1",
            "text": "We may suspend, restrict, or terminate access where reasonably necessary because:",
            "items": [
              "(a) you breach these Terms",
              "(b) we suspect fraud or abuse",
              "(c) payment has been reversed or disputed",
              "(d) you create security, supplier, network, legal, or reputational risk",
              "(e) you use the Service in a Prohibited Jurisdiction",
              "(f) we are required to act by law, authority, supplier, or payment provider."
            ]
          },
          {
            "num": "21.2",
            "text": "We may suspend delivery while investigating payment, fraud, sanctions, or Account concerns."
          },
          {
            "num": "21.3",
            "text": "If we terminate your Account because of your material breach, fraud, unlawful conduct, or abuse:",
            "items": [
              "(a) pending Orders may be cancelled",
              "(b) promotional Balance may be removed",
              "(c) paid Wallet Balance may be frozen or applied against valid amounts owed",
              "(d) refunds will only be provided where required by law or otherwise appropriate."
            ]
          },
          {
            "num": "21.4",
            "text": "If we terminate or discontinue the relationship for reasons unrelated to your breach, clause 9.10 applies."
          },
          {
            "num": "21.5",
            "text": "Termination does not affect accrued rights, remedies, payments, or obligations."
          }
        ]
      },
      {
        "title": "Changes to These Terms",
        "blocks": [
          {
            "num": "22.1",
            "text": "We may update these Terms for legal, regulatory, technical, supplier-related, security, commercial, or operational reasons."
          },
          {
            "num": "22.2",
            "text": "The current version will be published with an updated effective date."
          },
          {
            "num": "22.3",
            "text": "Where changes are material, we may provide additional notice by email, through your Account, or on the website."
          },
          {
            "num": "22.4",
            "text": "Changes will not reduce mandatory rights applying to completed consumer Orders."
          }
        ]
      },
      {
        "title": "Notices",
        "blocks": [
          {
            "num": "23.1",
            "text": "Notices to us must be sent to info@esim-ex.com unless we specify another method."
          },
          {
            "num": "23.2",
            "text": "We may send notices to:",
            "items": [
              "(a) the email address associated with your Account or Order",
              "(b) your Account",
              "(c) the Service."
            ]
          },
          {
            "num": "23.3",
            "text": "You are responsible for keeping your contact information accurate."
          }
        ]
      },
      {
        "title": "Governing Law and Jurisdiction",
        "blocks": [
          {
            "num": "24.1",
            "text": "These Terms are governed by the laws of England and Wales."
          },
          {
            "num": "24.2",
            "text": "If you are a business user, the courts of England and Wales have exclusive jurisdiction over disputes connected with these Terms."
          },
          {
            "num": "24.3",
            "text": "If you are a consumer, nothing in these Terms deprives you of mandatory protections available in your country of habitual residence where those protections cannot be excluded."
          },
          {
            "num": "24.4",
            "text": "Consumer disputes may also be resolved through applicable out-of-court dispute mechanisms where required or permitted by law."
          }
        ]
      },
      {
        "title": "Miscellaneous",
        "blocks": [
          {
            "num": "25.1",
            "text": "If any provision is invalid or unenforceable, the remaining provisions will remain in effect."
          },
          {
            "num": "25.2",
            "text": "A delay or failure to enforce a provision does not waive that provision or any other right."
          },
          {
            "num": "25.3",
            "text": "You may not assign your rights or obligations without our written consent."
          },
          {
            "num": "25.4",
            "text": "We may assign or transfer our rights and obligations in connection with:",
            "items": [
              "(a) a merger",
              "(b) acquisition",
              "(c) restructuring",
              "(d) sale of assets",
              "(e) business transfer",
              "(f) change of control."
            ]
          },
          {
            "num": "25.5",
            "text": "These Terms and the policies referenced in them constitute the agreement between you and us concerning the Service."
          },
          {
            "num": "25.6",
            "text": "A person who is not a party to these Terms has no right to enforce them under the Contracts (Rights of Third Parties) Act 1999 unless expressly stated otherwise."
          }
        ]
      },
      {
        "title": "Contact Details",
        "blocks": [
          {
            "company": [
              "ESIMEX LTD",
              "Company number: 17173983",
              "Registered office: Dept 6750, 196 High Road, Wood Green, London, United Kingdom, N22 8HH",
              "Email: info@esim-ex.com",
              "Phone: +44 7447 196114",
              "Website: https://www.esim-ex.com"
            ]
          }
        ]
      }
    ]
  },
  {
    "slug": "refund",
    "title": "Refund and Cancellation Policy",
    "effectiveDate": "Effective date: 28 July 2026",
    "intro": [
      {
        "text": "This Refund and Cancellation Policy applies to the digital eSIM services, Wallet Balance features, and related services offered through Esim-Ex at https://www.esim-ex.com (the “Service”)."
      },
      {
        "text": "This Policy is issued by:"
      },
      {
        "text": "Esim-Ex supplies digital eSIM services only. We do not sell or ship physical SIM cards or other physical goods. Accordingly, this Policy governs cancellations, refunds, re-delivery, replacement, price reductions, Wallet Balance restoration, and related remedies for digital services. It does not establish a physical returns process."
      },
      {
        "text": "This Policy should be read together with our Terms and Conditions, Digital Delivery Policy, Payment Policy, Acceptable Use and Fair Use Policy, Privacy Policy, and the Plan Details displayed before purchase."
      },
      {
        "text": "Nothing in this Policy excludes, restricts, or limits any mandatory consumer right or remedy available under applicable law."
      }
    ],
    "company": [
      "ESIMEX LTD",
      "Company number: 17173983",
      "Registered office: Dept 6750, 196 High Road, Wood Green, London, United Kingdom, N22 8HH",
      "Email: info@esim-ex.com",
      "Phone: +44 7447 196114"
    ],
    "sections": [
      {
        "title": "Scope",
        "blocks": [
          {
            "num": "1.1",
            "text": "This Policy applies to:",
            "items": [
              "(a) purchases of eSIM Plans",
              "(b) purchases and use of Wallet Balance",
              "(c) Digital Delivery of QR Codes, activation details, and installation instructions",
              "(d) failed or delayed eSIM provisioning",
              "(e) faulty, invalid, or unusable QR Codes",
              "(f) duplicate or incorrect payments",
              "(g) cancellations before Digital Delivery",
              "(h) Account closure and unused paid Wallet Balance",
              "(i) permanent discontinuation of the Service",
              "(j) complaints, payment disputes, and chargebacks."
            ]
          },
          {
            "num": "1.2",
            "text": "This Policy applies to country-specific, regional, and global eSIM Plans purchased directly through Esim-Ex."
          },
          {
            "num": "1.3",
            "text": "This Policy does not apply to:",
            "items": [
              "(a) third-party products or services purchased outside Esim-Ex",
              "(b) charges imposed independently by your bank, card issuer, payment provider, or primary mobile carrier",
              "(c) physical goods, because no physical goods are sold",
              "(d) losses caused solely by unsupported device use, incorrect device settings, or failure to follow installation instructions, except where mandatory law provides otherwise."
            ]
          }
        ]
      },
      {
        "title": "Definitions",
        "blocks": [
          {
            "text": "For the purposes of this Policy:"
          },
          {
            "text": "Account means your registered user account on the Service, where account functionality is available.",
            "definition": true
          },
          {
            "text": "Activated eSIM Plan means an eSIM Plan that has been installed, activated, connected to a supported network, or otherwise commenced in accordance with the applicable Plan Details.",
            "definition": true
          },
          {
            "text": "Digital Delivery means electronic delivery of a QR Code, activation code, installation details, Plan Details, or comparable digital access information by email or another digital method designated by us.",
            "definition": true
          },
          {
            "text": "Delivered eSIM Plan means an eSIM Plan for which the relevant QR Code, activation details, installation details, or comparable digital access information has been generated, sent to the email address associated with the Order, or otherwise made electronically available.",
            "definition": true
          },
          {
            "text": "eSIM Plan means a digital mobile connectivity package made available through the Service with its own destination, coverage area, data allowance, validity period, activation rules, supported networks, and other Plan Details.",
            "definition": true
          },
          {
            "text": "Plan Details means the information displayed before purchase or provided at delivery, including destination coverage, data allowance, validity period, activation rules, supported networks, and relevant restrictions.",
            "definition": true
          },
          {
            "text": "Prohibited Jurisdiction means any country, territory, region, person, organisation, entity, or location to which Esim-Ex does not provide the Service because of legal, regulatory, sanctions-related, supplier, payment provider, network, security, or commercial restrictions.",
            "definition": true
          },
          {
            "text": "Promotional Balance means Wallet Balance, credit, referral value, voucher, discount, trial value, or goodwill credit granted without payment or as part of a promotion.",
            "definition": true
          },
          {
            "text": "QR Code means a digital QR code or equivalent activation information used to install or activate an eSIM Plan.",
            "definition": true
          },
          {
            "text": "Used eSIM Plan means an eSIM Plan where data has been consumed, its validity period has begun, it has connected to a supported network, or it has otherwise been used.",
            "definition": true
          },
          {
            "text": "Wallet Balance or Balance means prepaid value recorded in your Account and available for use only within Esim-Ex to purchase eligible eSIM Plans or related digital services.",
            "definition": true
          }
        ]
      },
      {
        "title": "General Principles",
        "blocks": [
          {
            "num": "3.1",
            "text": "Refund requests are assessed under:",
            "items": [
              "(a) this Policy",
              "(b) our Terms and Conditions",
              "(c) the applicable Plan Details",
              "(d) the status of Digital Delivery, installation, activation, and use",
              "(e) the evidence available",
              "(f) applicable consumer law."
            ]
          },
          {
            "num": "3.2",
            "text": "A refund will not exceed the amount actually paid for the relevant transaction."
          },
          {
            "num": "3.3",
            "text": "Where appropriate, we may first seek to resolve a technical or fulfilment problem by:",
            "items": [
              "(a) re-sending the delivery email",
              "(b) re-delivering the QR Code",
              "(c) correcting provisioning",
              "(d) providing installation or activation assistance",
              "(e) replacing the eSIM Plan",
              "(f) restoring incorrectly deducted Wallet Balance."
            ]
          },
          {
            "num": "3.4",
            "text": "Where correction or replacement is impossible, disproportionate, unsuccessful, or not completed within a reasonable time without significant inconvenience, an appropriate remedy may include:",
            "items": [
              "(a) a full refund",
              "(b) a proportionate refund",
              "(c) a price reduction",
              "(d) Wallet Balance restoration",
              "(e) another remedy agreed with you or required by law."
            ]
          },
          {
            "num": "3.5",
            "text": "We will not reject a valid claim solely because an eSIM Plan is a digital product."
          },
          {
            "num": "3.6",
            "text": "We will not impose a blanket “no refund under any circumstances” rule."
          }
        ]
      },
      {
        "title": "Delivery Timeframe",
        "blocks": [
          {
            "num": "4.1",
            "text": "Once payment has been successfully authorised and the Order has been approved, the eSIM Plan is normally generated and sent by email within 5 minutes."
          },
          {
            "num": "4.2",
            "text": "You should allow up to 30 minutes for:",
            "items": [
              "(a) payment confirmation",
              "(b) supplier allocation or purchase of the eSIM",
              "(c) technical provisioning",
              "(d) QR Code generation",
              "(e) preparation and transmission of the delivery email."
            ]
          },
          {
            "num": "4.3",
            "text": "Delivery may take longer because of:",
            "items": [
              "(a) payment or identity verification",
              "(b) fraud or security checks",
              "(c) supplier or network delay",
              "(d) technical outage",
              "(e) unusually high demand",
              "(f) inaccurate Order information",
              "(g) circumstances outside our reasonable control."
            ]
          },
          {
            "num": "4.4",
            "text": "If your delivery email has not arrived within 30 minutes after successful payment, you should:",
            "items": [
              "(a) check your inbox",
              "(b) check spam, junk, promotions, and filtered folders",
              "(c) confirm that the email address used for the Order is correct",
              "(d) contact us at info@esim-ex.com."
            ]
          },
          {
            "num": "4.5",
            "text": "A delay beyond 30 minutes does not automatically mean that the Order has failed. We must be given a reasonable opportunity to investigate and provide Digital Delivery, unless applicable law entitles you to an immediate remedy."
          }
        ]
      },
      {
        "title": "Cancellation Before Digital Delivery",
        "blocks": [
          {
            "num": "5.1",
            "text": "You may request cancellation before the eSIM Plan has been generated, allocated, provisioned, sent, or otherwise made electronically available."
          },
          {
            "num": "5.2",
            "text": "Where we receive and can process the cancellation before Digital Delivery begins, we will normally:",
            "items": [
              "(a) cancel the Order",
              "(b) refund the amount paid",
              "or (c) restore the Wallet Balance used for the Order."
            ]
          },
          {
            "num": "5.3",
            "text": "Because eSIM fulfilment is normally automated and begins shortly after payment, we cannot guarantee that a cancellation request will reach us before Digital Delivery begins."
          },
          {
            "num": "5.4",
            "text": "If Digital Delivery has already begun, sections 6 to 11 of this Policy apply."
          }
        ]
      },
      {
        "title": "Immediate Digital Supply and Cancellation Rights",
        "blocks": [
          {
            "num": "6.1",
            "text": "eSIM Plans are digital products supplied electronically."
          },
          {
            "num": "6.2",
            "text": "By requesting immediate Digital Delivery, you ask us to begin supplying the eSIM Plan before the end of any statutory cancellation period that might otherwise apply."
          },
          {
            "num": "6.3",
            "text": "Where required by applicable law, we will request your express consent to immediate Digital Delivery and your acknowledgement that your statutory cancellation right may be lost once digital supply begins."
          },
          {
            "num": "6.4",
            "text": "Your cancellation right will only be treated as lost to the extent permitted by applicable law and where the legally required consent and acknowledgement have been validly obtained."
          },
          {
            "num": "6.5",
            "text": "Digital supply may be treated as having begun once the eSIM Plan, QR Code, activation details, or installation information has been:",
            "items": [
              "(a) generated",
              "(b) allocated",
              "(c) provisioned",
              "(d) sent to your email address",
              "(e) otherwise made electronically available."
            ]
          },
          {
            "num": "6.6",
            "text": "Loss of a cancellation right does not remove your rights where the eSIM Plan is:",
            "items": [
              "(a) not delivered",
              "(b) materially defective",
              "(c) materially not as described",
              "(d) unusable because of a fault attributable to us or our fulfilment chain",
              "(e) otherwise subject to a mandatory statutory remedy."
            ]
          }
        ]
      },
      {
        "title": "When a Full Refund May Be Provided",
        "blocks": [
          {
            "text": "A full refund may be provided where:"
          },
          {
            "num": "7.1",
            "text": "we cancel the Order before Digital Delivery;"
          },
          {
            "num": "7.2",
            "text": "payment was taken but no usable eSIM Plan was delivered;"
          },
          {
            "num": "7.3",
            "text": "the QR Code or activation details are invalid or faulty because of a technical or provisioning issue attributable to us or our supplier;"
          },
          {
            "num": "7.4",
            "text": "the eSIM Plan cannot be installed or activated because of a provisioning fault attributable to us or our supplier;"
          },
          {
            "num": "7.5",
            "text": "we deliver the wrong destination, region, data allowance, validity period, or materially different eSIM Plan;"
          },
          {
            "num": "7.6",
            "text": "duplicate payment was taken for the same Order;"
          },
          {
            "num": "7.7",
            "text": "Wallet Balance was deducted more than once for the same Order;"
          },
          {
            "num": "7.8",
            "text": "correction, re-delivery, or replacement is impossible or unsuccessful within a reasonable time and without significant inconvenience;"
          },
          {
            "num": "7.9",
            "text": "we permanently discontinue the Service and cannot fulfil an undelivered paid Order;"
          },
          {
            "num": "7.10",
            "text": "unused paid Wallet Balance can no longer reasonably be used because of permanent service discontinuation;"
          },
          {
            "num": "7.11",
            "text": "a full refund is required by applicable law."
          }
        ]
      },
      {
        "title": "Partial Refunds and Price Reductions",
        "blocks": [
          {
            "num": "8.1",
            "text": "A partial refund or proportionate price reduction may be appropriate where:",
            "items": [
              "(a) part of the purchased service was successfully supplied or used",
              "(b) only part of the data allowance was affected",
              "(c) only part of the validity period was unavailable",
              "(d) the defect reduced, but did not eliminate, the value of the eSIM Plan",
              "(e) a partial remedy is required by applicable law."
            ]
          },
          {
            "num": "8.2",
            "text": "The amount will be assessed with reference to:",
            "items": [
              "(a) the price paid",
              "(b) data already used",
              "(c) the portion of the validity period already received",
              "(d) the seriousness and duration of the issue",
              "(e) the difference between the service purchased and the service supplied",
              "(f) other relevant circumstances."
            ]
          },
          {
            "num": "8.3",
            "text": "A price reduction may amount to the full price where the eSIM Plan had no meaningful usable value."
          }
        ]
      },
      {
        "title": "Faulty QR Codes and Provisioning Failures",
        "blocks": [
          {
            "num": "9.1",
            "text": "If a QR Code, activation code, or eSIM profile is faulty, invalid, corrupted, inaccessible, or incapable of activation, you must contact us promptly."
          },
          {
            "num": "9.2",
            "text": "Your request should include:",
            "items": [
              "(a) the Order reference",
              "(b) the email address used for the Order",
              "(c) the purchased eSIM Plan",
              "(d) your device model",
              "(e) operating system version",
              "(f) intended destination",
              "(g) screenshots or error messages",
              "(h) the installation or activation steps already attempted."
            ]
          },
          {
            "num": "9.3",
            "text": "We may review:",
            "items": [
              "(a) payment records",
              "(b) email delivery records",
              "(c) QR Code generation records",
              "(d) provisioning and supplier records",
              "(e) activation status",
              "(f) network information",
              "(g) support correspondence",
              "(h) information provided by you."
            ]
          },
          {
            "num": "9.4",
            "text": "Where the issue is attributable to us or our fulfilment chain, we will use reasonable efforts to:",
            "items": [
              "(a) re-send the email",
              "(b) issue corrected activation details",
              "(c) correct the provisioning",
              "(d) provide technical assistance",
              "(e) supply an equivalent replacement plan."
            ]
          },
          {
            "num": "9.5",
            "text": "The remedy will be provided:",
            "items": [
              "(a) without additional charge",
              "(b) within a reasonable time",
              "(c) without significant inconvenience where reasonably possible."
            ]
          },
          {
            "num": "9.6",
            "text": "If the issue cannot be corrected within a reasonable time, we will consider a refund, price reduction, or Wallet Balance restoration under sections 7 and 8."
          }
        ]
      },
      {
        "title": "When Refunds Will Normally Not Be Approved",
        "blocks": [
          {
            "text": "Subject to mandatory consumer rights, refunds will not normally be approved where:"
          },
          {
            "num": "10.1",
            "text": "you changed your mind after Digital Delivery began and your cancellation right was validly lost;"
          },
          {
            "num": "10.2",
            "text": "you selected the wrong:",
            "items": [
              "(a) destination",
              "(b) region",
              "(c) data allowance",
              "(d) validity period",
              "(e) eSIM Plan;"
            ]
          },
          {
            "num": "10.3",
            "text": "your travel plans changed, were postponed, or were cancelled;"
          },
          {
            "num": "10.4",
            "text": "your device:",
            "items": [
              "(a) does not support eSIM",
              "(b) is network-locked",
              "(c) is an unsupported regional variant",
              "(d) has outdated or incompatible software",
              "(e) otherwise fails the technical requirements of the eSIM Plan;"
            ]
          },
          {
            "num": "10.5",
            "text": "you failed to check compatibility, destination coverage, validity rules, or Plan Details before purchase;"
          },
          {
            "num": "10.6",
            "text": "you:",
            "items": [
              "(a) activated the eSIM earlier than intended",
              "(b) installed it on the wrong device",
              "(c) deleted the eSIM profile",
              "(d) reset or changed the device",
              "(e) attempted an unsupported transfer",
              "(f) failed to follow installation instructions;"
            ]
          },
          {
            "num": "10.7",
            "text": "the issue was caused by:",
            "items": [
              "(a) incorrect APN settings",
              "(b) incorrect roaming settings",
              "(c) incorrect SIM priority",
              "(d) disabled mobile data",
              "(e) another user-side configuration issue;"
            ]
          },
          {
            "num": "10.8",
            "text": "the eSIM Plan was used outside the supported destination, coverage area, or validity period;"
          },
          {
            "num": "10.9",
            "text": "local speed, latency, coverage, or signal quality was lower than expected, but the eSIM Plan was otherwise substantially as described;"
          },
          {
            "num": "10.10",
            "text": "your primary carrier charged roaming, voice, SMS, or other fees because of your device settings;"
          },
          {
            "num": "10.11",
            "text": "the request concerns Promotional Balance that was not purchased by you;"
          },
          {
            "num": "10.12",
            "text": "we reasonably identify fraud, deliberate misrepresentation, refund abuse, or another material breach of our Terms."
          }
        ]
      },
      {
        "title": "Network Coverage and Performance",
        "blocks": [
          {
            "num": "11.1",
            "text": "eSIM Plans rely on third-party mobile operators, telecom providers, roaming partners, aggregators, and local infrastructure."
          },
          {
            "num": "11.2",
            "text": "Coverage, speed, latency, signal quality, and network availability may vary because of:",
            "items": [
              "(a) geographic location",
              "(b) terrain and buildings",
              "(c) device capabilities",
              "(d) congestion",
              "(e) maintenance",
              "(f) local network restrictions",
              "(g) weather",
              "(h) government action",
              "(i) third-party provider performance."
            ]
          },
          {
            "num": "11.3",
            "text": "We do not guarantee uninterrupted coverage, minimum speed, constant latency, or availability of a particular network technology unless expressly stated."
          },
          {
            "num": "11.4",
            "text": "Temporary or location-specific network variation will not by itself create an automatic refund entitlement where the eSIM Plan remains substantially usable and as described."
          },
          {
            "num": "11.5",
            "text": "A refund or price reduction may still apply where:",
            "items": [
              "(a) the plan cannot connect in the advertised destination because of a provisioning fault",
              "(b) the advertised service is materially unavailable",
              "(c) the plan is materially not as described",
              "(d) mandatory law requires a remedy."
            ]
          }
        ]
      },
      {
        "title": "Wallet Balance Refunds",
        "blocks": [
          {
            "num": "12.1",
            "text": "Unused paid Wallet Balance may be refundable where:",
            "items": [
              "(a) you validly cancel the top-up within an applicable statutory cooling-off period",
              "(b) the Balance was credited incorrectly",
              "(c) payment was duplicated",
              "(d) a technical issue attributable to us permanently prevents use of the Balance",
              "(e) we permanently discontinue the Service and the Balance can no longer reasonably be used",
              "(f) refund is required by applicable law",
              "(g) we expressly agree otherwise."
            ]
          },
          {
            "num": "12.2",
            "text": "Wallet Balance that has been used to purchase an eSIM Plan will be assessed under the rules applying to that eSIM Plan."
          },
          {
            "num": "12.3",
            "text": "Paid Wallet Balance does not ordinarily expire while:",
            "items": [
              "(a) the Account remains open and in good standing",
              "(b) the Service remains operational",
              "(c) eligible eSIM services remain reasonably available."
            ]
          },
          {
            "num": "12.4",
            "text": "Wallet Balance is not guaranteed to remain usable indefinitely if the Service permanently closes."
          },
          {
            "num": "12.5",
            "text": "Promotional Balance:",
            "items": [
              "(a) has no cash value",
              "(b) is normally non-refundable",
              "(c) may be removed when the Account is closed",
              "(d) may be subject to expiry or separate promotional conditions."
            ]
          },
          {
            "num": "12.6",
            "text": "Wallet Balance affected by fraud, unauthorised payment, chargeback, duplicate crediting, or manifest technical error may be frozen, adjusted, or reversed."
          }
        ]
      },
      {
        "title": "Account Closure",
        "blocks": [
          {
            "num": "13.1",
            "text": "You may request closure of your Account by emailing info@esim-ex.com."
          },
          {
            "num": "13.2",
            "text": "Our support team will contact you to:",
            "items": [
              "(a) verify the request",
              "(b) confirm your identity where reasonably necessary",
              "(c) review pending Orders",
              "(d) identify active eSIM Plans",
              "(e) review remaining Wallet Balance",
              "(f) identify unresolved refunds, disputes, or chargebacks",
              "(g) explain the consequences of closure."
            ]
          },
          {
            "num": "13.3",
            "text": "You should normally use remaining Wallet Balance before voluntary Account closure."
          },
          {
            "num": "13.4",
            "text": "Closure does not automatically entitle you to cash payment of unused Wallet Balance outside the circumstances described in section 12.1."
          },
          {
            "num": "13.5",
            "text": "Closing an Account does not automatically cancel or refund a Delivered, Activated, or Used eSIM Plan."
          },
          {
            "num": "13.6",
            "text": "Undelivered paid Orders will be:",
            "items": [
              "(a) completed where appropriate",
              "(b) cancelled and refunded",
              "or (c) restored to Wallet Balance, depending on the circumstances and your rights."
            ]
          },
          {
            "num": "13.7",
            "text": "We may delay closure where reasonably necessary to:",
            "items": [
              "(a) complete a pending Order",
              "(b) investigate unauthorised activity",
              "(c) resolve a payment dispute or chargeback",
              "(d) comply with legal or accounting obligations",
              "(e) preserve evidence",
              "(f) recover an amount lawfully owed."
            ]
          },
          {
            "num": "13.8",
            "text": "Promotional Balance may be cancelled when the Account is closed."
          }
        ]
      },
      {
        "title": "Permanent Service Discontinuation",
        "blocks": [
          {
            "num": "14.1",
            "text": "If Esim-Ex permanently discontinues the Service for reasons unrelated to your breach:",
            "items": [
              "(a) undelivered paid Orders will be refunded",
              "(b) unused paid Wallet Balance that can no longer reasonably be used will be refunded",
              "(c) we will use reasonable efforts to allow active eSIM Plans to continue until their original expiry",
              "(d) where an active eSIM Plan is terminated early, we will provide an appropriate replacement, proportionate refund, price reduction, Wallet Balance restoration, or another remedy required by law."
            ]
          },
          {
            "num": "14.2",
            "text": "We may request reasonable verification before refunding Wallet Balance following permanent discontinuation."
          },
          {
            "num": "14.3",
            "text": "Promotional Balance is not refundable unless required by law or expressly stated otherwise."
          },
          {
            "num": "14.4",
            "text": "Permanent discontinuation does not affect refund rights that arose before closure of the Service."
          }
        ]
      },
      {
        "title": "Prohibited Jurisdictions",
        "blocks": [
          {
            "num": "15.1",
            "text": "Esim-Ex does not provide, sell, deliver, activate, or support services in or for the following Prohibited Jurisdictions:",
            "items": [
              "Sudan",
              "Democratic Republic of the Congo",
              "Iran",
              "Mali",
              "Myanmar (Burma)",
              "North Korea",
              "South Sudan",
              "Syria",
              "Yemen",
              "Afghanistan",
              "Belarus",
              "Central African Republic",
              "Cuba",
              "Haiti",
              "Iraq",
              "Russia",
              "Somalia",
              "Venezuela",
              "Zimbabwe."
            ],
            "bullet": true
          },
          {
            "num": "15.2",
            "text": "This list may change from time to time because of legal, sanctions-related, supplier, payment provider, security, network, or commercial restrictions."
          },
          {
            "num": "15.3",
            "text": "If we identify a prohibited destination before Digital Delivery, we may cancel the Order and normally refund the amount paid."
          },
          {
            "num": "15.4",
            "text": "A refund may be withheld or delayed where:",
            "items": [
              "(a) payment is blocked or frozen by law",
              "(b) refund is legally prohibited",
              "(c) the payment was fraudulent or unauthorised",
              "(d) sanctions or payment-provider restrictions prevent processing."
            ]
          },
          {
            "num": "15.5",
            "text": "No refund will ordinarily be provided where you deliberately supplied false information or attempted to circumvent restrictions after the eSIM Plan had been delivered or used, except where mandatory law requires otherwise."
          }
        ]
      },
      {
        "title": "Duplicate and Incorrect Orders",
        "blocks": [
          {
            "num": "16.1",
            "text": "If you believe that you placed a duplicate Order, contact us promptly."
          },
          {
            "num": "16.2",
            "text": "A duplicate Order may be refunded where:",
            "items": [
              "(a) the duplication can be verified",
              "(b) the duplicate eSIM Plan has not been installed, activated, or used",
              "(c) the duplicate Wallet Balance has not been used",
              "(d) no fraud or abuse is identified."
            ]
          },
          {
            "num": "16.3",
            "text": "If a duplicated payment resulted from a technical error attributable to us, we will refund or reverse the duplicate amount."
          },
          {
            "num": "16.4",
            "text": "If you purchased the wrong plan, contact us promptly. We may be able to cancel or exchange it before Digital Delivery, but we cannot guarantee cancellation once provisioning has begun."
          }
        ]
      },
      {
        "title": "How to Request a Refund or Remedy",
        "blocks": [
          {
            "num": "17.1",
            "text": "Send your request to info@esim-ex.com."
          },
          {
            "num": "17.2",
            "text": "Your request should include:",
            "items": [
              "(a) your Account email address or the email used for the Order",
              "(b) Order or transaction reference",
              "(c) purchase date",
              "(d) disputed amount",
              "(e) eSIM Plan purchased",
              "(f) destination or region",
              "(g) device model and operating system",
              "(h) description of the issue",
              "(i) relevant screenshots or error messages",
              "(j) payment confirmation, where relevant",
              "(k) troubleshooting steps already completed",
              "(l) the remedy you are requesting."
            ]
          },
          {
            "num": "17.3",
            "text": "We may ask for additional information reasonably necessary to:",
            "items": [
              "(a) verify your identity",
              "(b) confirm the Order",
              "(c) investigate delivery or activation",
              "(d) prevent fraud",
              "(e) determine the appropriate remedy."
            ]
          },
          {
            "num": "17.4",
            "text": "Failure to provide reasonably requested information may delay the review or prevent us from verifying the claim."
          }
        ]
      },
      {
        "title": "Review and Response Time",
        "blocks": [
          {
            "num": "18.1",
            "text": "We aim to acknowledge a refund or service complaint within 2 business days."
          },
          {
            "num": "18.2",
            "text": "We aim to provide a substantive response within 10 business days."
          },
          {
            "num": "18.3",
            "text": "Complex matters may require additional time where we need information from:",
            "items": [
              "(a) a payment processor",
              "(b) an eSIM supplier",
              "(c) a mobile network",
              "(d) a bank or card issuer",
              "(e) another third-party provider."
            ]
          },
          {
            "num": "18.4",
            "text": "If additional time is required, we may provide an update and request further information."
          },
          {
            "num": "18.5",
            "text": "These operational targets do not reduce any shorter response period required by applicable law."
          }
        ]
      },
      {
        "title": "Refund Processing",
        "blocks": [
          {
            "num": "19.1",
            "text": "Approved monetary refunds will normally be made to the original payment method."
          },
          {
            "num": "19.2",
            "text": "We will process an approved refund without undue delay and no later than 14 days after agreeing that the refund is due, unless a shorter period is required by law."
          },
          {
            "num": "19.3",
            "text": "Banks, card issuers, and payment providers may require additional time to display the refund after we have processed it."
          },
          {
            "num": "19.4",
            "text": "We are not responsible for third-party processing delays after the refund has been submitted correctly."
          },
          {
            "num": "19.5",
            "text": "If the original payment method cannot receive the refund, we may request additional verification before agreeing an alternative method."
          },
          {
            "num": "19.6",
            "text": "We do not refund foreign exchange differences, bank charges, card fees, or third-party payment charges unless required by law."
          }
        ]
      },
      {
        "title": "Complaints and Internal Disputes",
        "blocks": [
          {
            "num": "20.1",
            "text": "If you dispute a payment, delivery, activation, Wallet Balance deduction, or refund decision, contact us at info@esim-ex.com."
          },
          {
            "num": "20.2",
            "text": "Your complaint should clearly state:",
            "items": [
              "(a) the disputed Order",
              "(b) the amount",
              "(c) the issue",
              "(d) the outcome requested",
              "(e) relevant evidence."
            ]
          },
          {
            "num": "20.3",
            "text": "We may review:",
            "items": [
              "(a) payment and checkout records",
              "(b) 3D Secure or authentication information",
              "(c) email delivery records",
              "(d) QR Code generation records",
              "(e) provisioning and activation records",
              "(f) Wallet Balance history",
              "(g) Account activity",
              "(h) support correspondence",
              "(i) fraud-prevention information."
            ]
          },
          {
            "num": "20.4",
            "text": "We may offer:",
            "items": [
              "(a) re-delivery",
              "(b) replacement",
              "(c) technical correction",
              "(d) Wallet Balance restoration",
              "(e) partial refund",
              "(f) full refund",
              "(g) another reasonable resolution."
            ]
          },
          {
            "num": "20.5",
            "text": "Nothing in this Policy prevents you from contacting your payment provider, regulator, alternative dispute body, or court where you have a legitimate right to do so."
          }
        ]
      },
      {
        "title": "Chargebacks",
        "blocks": [
          {
            "num": "21.1",
            "text": "A chargeback is a payment dispute initiated through your bank, card issuer, or payment provider."
          },
          {
            "num": "21.2",
            "text": "Where reasonably practicable, we encourage you to contact us before initiating a chargeback so that we can investigate and attempt to resolve the matter."
          },
          {
            "num": "21.3",
            "text": "Contacting us first is not a waiver of your legitimate legal or payment-scheme rights."
          },
          {
            "num": "21.4",
            "text": "If you initiate a chargeback:",
            "items": [
              "(a) we may pause an overlapping internal refund request",
              "(b) the disputed Order or Wallet Balance may be restricted while the claim is reviewed",
              "(c) we may provide relevant evidence to the payment provider",
              "(d) the payment provider will determine the chargeback under its applicable rules."
            ]
          },
          {
            "num": "21.5",
            "text": "Relevant evidence may include:",
            "items": [
              "(a) payment authorisation records",
              "(b) 3D Secure records",
              "(c) checkout confirmations",
              "(d) Order confirmations",
              "(e) delivery timestamps",
              "(f) QR Code generation and delivery records",
              "(g) provisioning and activation records",
              "(h) data usage status where available",
              "(i) Account and IP records",
              "(j) support correspondence",
              "(k) prior refund or troubleshooting activity."
            ]
          },
          {
            "num": "21.6",
            "text": "You may not receive both:",
            "items": [
              "(a) a direct refund from Esim-Ex",
              "and (b) reimbursement through a successful chargeback,"
            ]
          },
          {
            "text": "for the same payment."
          },
          {
            "num": "21.7",
            "text": "If duplicate reimbursement occurs, you must notify us, and we may recover or reverse the duplicate amount."
          },
          {
            "num": "21.8",
            "text": "We will not suspend or terminate an Account merely because you made a legitimate complaint or chargeback."
          },
          {
            "num": "21.9",
            "text": "Where we reasonably identify fraud, deliberate misrepresentation, use followed by a false non-delivery claim, repeated unjustified chargebacks, or other abuse, we may:",
            "items": [
              "(a) restrict or suspend the Account",
              "(b) cancel pending Orders",
              "(c) reverse related Wallet Balance",
              "(d) refuse future purchases",
              "(e) terminate access",
              "(f) submit evidence to relevant providers",
              "(g) take lawful recovery action."
            ]
          },
          {
            "num": "21.10",
            "text": "Any action taken will be proportionate and will not limit mandatory consumer rights."
          }
        ]
      },
      {
        "title": "Fraud and Abuse",
        "blocks": [
          {
            "num": "22.1",
            "text": "Refunds may be refused where the request is based on:",
            "items": [
              "(a) false information",
              "(b) falsified evidence",
              "(c) stolen or unauthorised payment details",
              "(d) deliberate misuse",
              "(e) unauthorised resale",
              "(f) repeated bad-faith claims",
              "(g) manipulation of Wallet Balance or promotions."
            ]
          },
          {
            "num": "22.2",
            "text": "We may suspend delivery or Account access while investigating suspected fraud or abuse."
          },
          {
            "num": "22.3",
            "text": "This section does not prevent or discourage legitimate refund requests, complaints, or payment disputes."
          }
        ]
      },
      {
        "title": "Changes to This Policy",
        "blocks": [
          {
            "num": "23.1",
            "text": "We may update this Policy for legal, regulatory, technical, payment-related, supplier-related, network-related, operational, security, or commercial reasons."
          },
          {
            "num": "23.2",
            "text": "The latest version will be published on the Service with an updated effective date."
          },
          {
            "num": "23.3",
            "text": "Changes apply prospectively unless otherwise required by law."
          },
          {
            "num": "23.4",
            "text": "Changes will not reduce mandatory rights already applying to completed consumer Orders."
          }
        ]
      },
      {
        "title": "Governing Law and Consumer Rights",
        "blocks": [
          {
            "num": "24.1",
            "text": "This Policy is governed by the laws of England and Wales."
          },
          {
            "num": "24.2",
            "text": "Nothing in this Policy limits mandatory rights available under applicable consumer law."
          },
          {
            "num": "24.3",
            "text": "Consumers residing in another country may also have non-excludable protections under the law of their habitual residence."
          },
          {
            "num": "24.4",
            "text": "Applicable out-of-court dispute mechanisms may be available where required or permitted by law."
          }
        ]
      },
      {
        "title": "Contact Details",
        "blocks": [
          {
            "text": "For refund, cancellation, Wallet Balance, delivery, provisioning, or payment dispute enquiries, contact:"
          },
          {
            "company": [
              "ESIMEX LTD",
              "Company number: 17173983",
              "Registered office: Dept 6750, 196 High Road, Wood Green, London, United Kingdom, N22 8HH",
              "Email: info@esim-ex.com",
              "Phone: +44 7447 196114",
              "Website: https://www.esim-ex.com"
            ]
          }
        ]
      }
    ]
  },
  {
    "slug": "delivery",
    "title": "Digital Delivery Policy",
    "effectiveDate": "Effective date: 28 July 2026",
    "intro": [
      {
        "text": "This Digital Delivery Policy explains how digital eSIM products purchased through Esim-Ex are processed and delivered, when delivery is treated as completed, what you need to receive and use your eSIM, and what remedies may be available if delivery or technical provisioning fails."
      },
      {
        "text": "This Policy applies to digital eSIM services offered through https://www.esim-ex.com and is issued by:"
      },
      {
        "text": "This Policy should be read together with our Terms and Conditions, Refund and Cancellation Policy, Payment Policy, Acceptable Use and Fair Use Policy, Privacy Policy, and any plan-specific information displayed before purchase."
      },
      {
        "text": "Nothing in this Policy excludes, restricts, or limits any mandatory consumer rights or remedies available under applicable law."
      }
    ],
    "company": [
      "ESIMEX LTD",
      "Company number: 17173983",
      "Registered office: Dept 6750, 196 High Road, Wood Green, London, United Kingdom, N22 8HH",
      "Email: info@esim-ex.com",
      "Phone: +44 7447 196114"
    ],
    "sections": [
      {
        "title": "Digital Delivery Only",
        "blocks": [
          {
            "num": "1.1",
            "text": "Esim-Ex supplies digital eSIM services only."
          },
          {
            "num": "1.2",
            "text": "We do not sell or deliver:",
            "items": [
              "(a) physical SIM cards",
              "(b) printed activation cards",
              "(c) physical vouchers",
              "(d) physical telecommunications equipment",
              "(e) other physical goods."
            ]
          },
          {
            "num": "1.3",
            "text": "All eSIM Plans are delivered electronically."
          },
          {
            "num": "1.4",
            "text": "Depending on the relevant eSIM Plan, Digital Delivery may include:",
            "items": [
              "(a) a QR Code",
              "(b) a manual activation code",
              "(c) installation details",
              "(d) activation instructions",
              "(e) destination and coverage information",
              "(f) data allowance and validity information",
              "(g) supported network information",
              "(h) APN or configuration instructions, where required",
              "(i) other information needed to install or use the eSIM Plan."
            ]
          },
          {
            "num": "1.5",
            "text": "Because no physical products are supplied, there are no:",
            "items": [
              "(a) postage or shipping charges",
              "(b) courier delivery times",
              "(c) customs charges relating to physical delivery",
              "(d) physical return procedures."
            ]
          }
        ]
      },
      {
        "title": "Definitions",
        "blocks": [
          {
            "text": "For the purposes of this Policy:"
          },
          {
            "text": "Account means your registered user account on the Service, where account functionality is available.",
            "definition": true
          },
          {
            "text": "Activated eSIM Plan means an eSIM Plan that has been installed, activated, connected to a supported network, or otherwise commenced under the applicable Plan Details.",
            "definition": true
          },
          {
            "text": "Digital Delivery means electronic delivery of a QR Code, activation code, installation details, Plan Details, or comparable digital access information by email or another digital method designated by us.",
            "definition": true
          },
          {
            "text": "Delivered eSIM Plan means an eSIM Plan for which the relevant QR Code, activation details, installation details, or comparable digital access information has been sent to the email address associated with the Order or otherwise made electronically available.",
            "definition": true
          },
          {
            "text": "eSIM means an embedded digital SIM profile that can be installed on a compatible device without using a physical SIM card.",
            "definition": true
          },
          {
            "text": "eSIM Plan means a digital mobile connectivity package made available through the Service with its own destination, coverage area, data allowance, validity period, activation rules, supported networks, and other Plan Details.",
            "definition": true
          },
          {
            "text": "Order means a completed purchase of an eSIM Plan, Wallet Balance, or another digital service through Esim-Ex.",
            "definition": true
          },
          {
            "text": "Plan Details means the destination, coverage, data allowance, validity period, activation method, supported networks, restrictions, and other conditions displayed before purchase or provided at delivery.",
            "definition": true
          },
          {
            "text": "Prohibited Jurisdiction means any country, territory, region, person, organisation, entity, or location to which Esim-Ex does not provide the Service because of legal, regulatory, sanctions-related, supplier, payment-provider, network, security, or commercial restrictions.",
            "definition": true
          },
          {
            "text": "QR Code means the digital QR code or equivalent activation information used to install or activate an eSIM Plan.",
            "definition": true
          },
          {
            "text": "Supported Device means a device that is eSIM-compatible, network-unlocked where required, technically compatible with the selected eSIM Plan, and capable of installing and using that plan.",
            "definition": true
          },
          {
            "text": "Wallet Balance or Balance means prepaid value recorded in your Account and available for use only within Esim-Ex.",
            "definition": true
          }
        ]
      },
      {
        "title": "Delivery Method",
        "blocks": [
          {
            "num": "3.1",
            "text": "Unless expressly stated otherwise during checkout, eSIM Plans are delivered by email."
          },
          {
            "num": "3.2",
            "text": "The delivery email will be sent to:",
            "items": [
              "(a) the email address provided during checkout",
              "or (b) the email address associated with your Account or Order."
            ]
          },
          {
            "num": "3.3",
            "text": "You are responsible for providing a complete, accurate, and accessible email address."
          },
          {
            "num": "3.4",
            "text": "You must ensure that:",
            "items": [
              "(a) you have access to the relevant email account",
              "(b) the mailbox has sufficient storage space",
              "(c) your email settings allow messages from Esim-Ex",
              "(d) spam, junk, security, or organisational filters do not block delivery",
              "(e) the email address remains available after purchase."
            ]
          },
          {
            "num": "3.5",
            "text": "We may also send:",
            "items": [
              "(a) an Order confirmation",
              "(b) a payment confirmation",
              "(c) a receipt or invoice",
              "(d) a separate eSIM delivery email",
              "(e) support or troubleshooting messages",
              "(f) security or service notices."
            ]
          },
          {
            "num": "3.6",
            "text": "The Order confirmation and eSIM delivery email may be sent separately."
          }
        ]
      },
      {
        "title": "Delivery Timeframe",
        "blocks": [
          {
            "num": "4.1",
            "text": "Once payment has been successfully authorised and the Order has been approved, the eSIM Plan is normally generated and sent within 5 minutes."
          },
          {
            "num": "4.2",
            "text": "You should allow up to 30 minutes for completion of:",
            "items": [
              "(a) payment confirmation",
              "(b) security or fraud screening",
              "(c) purchase or allocation of the eSIM from the relevant supplier",
              "(d) technical provisioning",
              "(e) QR Code generation",
              "(f) preparation of the delivery information",
              "(g) transmission of the delivery email."
            ]
          },
          {
            "num": "4.3",
            "text": "The 30-minute period begins after:",
            "items": [
              "(a) payment has been successfully authorised",
              "(b) all required checkout information has been submitted",
              "(c) the Order has not been placed on hold for verification or compliance review."
            ]
          },
          {
            "num": "4.4",
            "text": "Delivery may take longer than 30 minutes where reasonably necessary because of:",
            "items": [
              "(a) payment verification",
              "(b) 3D Secure or bank authentication",
              "(c) fraud or security checks",
              "(d) supplier or mobile-network delay",
              "(e) technical outage or maintenance",
              "(f) unusually high demand",
              "(g) incorrect or incomplete Order information",
              "(h) payment-provider restrictions",
              "(i) legal, sanctions, or compliance checks",
              "(j) circumstances outside our reasonable control."
            ]
          },
          {
            "num": "4.5",
            "text": "If a delay is caused by additional verification, we may contact you and request further information."
          },
          {
            "num": "4.6",
            "text": "Any statement that delivery is “instant” or “immediate” means that delivery is ordinarily automated and expected shortly after successful payment. It does not constitute an absolute guarantee that every Order will be delivered without any processing time."
          }
        ]
      },
      {
        "title": "What to Do if Delivery Takes Longer Than 30 Minutes",
        "blocks": [
          {
            "num": "5.1",
            "text": "If the eSIM delivery email has not arrived within 30 minutes after successful payment, you should:",
            "items": [
              "(a) check your inbox",
              "(b) check spam and junk folders",
              "(c) check promotions, updates, quarantine, and filtered folders",
              "(d) search your mailbox for “Esim-Ex” or your Order reference",
              "(e) confirm that the email address used for the Order is correct",
              "(f) check whether your mailbox is full",
              "(g) contact us at info@esim-ex.com."
            ]
          },
          {
            "num": "5.2",
            "text": "When contacting us, please provide:",
            "items": [
              "(a) your full name, where provided during checkout",
              "(b) the email address used for the Order",
              "(c) the Order or transaction reference",
              "(d) the approximate purchase date and time",
              "(e) the eSIM Plan purchased",
              "(f) payment confirmation or receipt, where available."
            ]
          },
          {
            "num": "5.3",
            "text": "A delay beyond 30 minutes does not automatically mean that the Order has permanently failed."
          },
          {
            "num": "5.4",
            "text": "Unless applicable law entitles you to an immediate remedy, you must give us a reasonable opportunity to:",
            "items": [
              "(a) verify the payment",
              "(b) identify the Order",
              "(c) investigate delivery status",
              "(d) contact the relevant supplier",
              "(e) complete or repeat Digital Delivery."
            ]
          }
        ]
      },
      {
        "title": "When Delivery Is Treated as Completed",
        "blocks": [
          {
            "num": "6.1",
            "text": "An eSIM Plan is treated as digitally delivered when the relevant:",
            "items": [
              "(a) QR Code",
              "(b) activation details",
              "(c) installation information",
              "(d) manual activation code",
              "(e) comparable digital access credentials,"
            ]
          },
          {
            "text": "have been sent to the email address associated with your Order or otherwise made electronically available to you."
          },
          {
            "num": "6.2",
            "text": "Digital Delivery may be treated as completed even if you do not immediately:",
            "items": [
              "(a) open the email",
              "(b) view the QR Code",
              "(c) scan the QR Code",
              "(d) install the eSIM",
              "(e) activate the eSIM",
              "(f) connect to a supported network",
              "(g) use the data allowance."
            ]
          },
          {
            "num": "6.3",
            "text": "Digital Delivery, installation, activation, and use are separate stages."
          },
          {
            "num": "6.4",
            "text": "A delivery record showing successful transmission to the email address provided by you may be used as evidence that Digital Delivery occurred."
          },
          {
            "num": "6.5",
            "text": "Evidence of delivery does not remove your rights if the QR Code, activation details, or eSIM Plan are materially defective, invalid, or materially not as described."
          }
        ]
      },
      {
        "title": "Your Email Responsibilities",
        "blocks": [
          {
            "num": "7.1",
            "text": "You are responsible for checking the accuracy of the email address before confirming payment."
          },
          {
            "num": "7.2",
            "text": "We are not responsible for delivery failure or delay caused solely by:",
            "items": [
              "(a) an incorrect email address supplied by you",
              "(b) a typographical error in the email address",
              "(c) loss of access to your email account",
              "(d) a full or disabled mailbox",
              "(e) spam or security filtering outside our control",
              "(f) an email provider outage",
              "(g) organisational email restrictions",
              "(h) your failure to check the relevant folders."
            ]
          },
          {
            "num": "7.3",
            "text": "If you provided an incorrect email address, contact us promptly."
          },
          {
            "num": "7.4",
            "text": "Before changing the delivery address or re-sending sensitive eSIM information, we may require reasonable verification to confirm that:",
            "items": [
              "(a) you placed the Order",
              "(b) you are authorised to access it",
              "(c) the QR Code has not already been installed, activated, transferred, or used."
            ]
          },
          {
            "num": "7.5",
            "text": "We may be unable to redirect or reissue an eSIM Plan if:",
            "items": [
              "(a) the QR Code has already been accessed or used",
              "(b) the eSIM has already been installed",
              "(c) supplier rules prevent reissuance",
              "(d) we cannot verify the request",
              "(e) fraud or unauthorised access is suspected."
            ]
          }
        ]
      },
      {
        "title": "Requirements Before Purchase",
        "blocks": [
          {
            "num": "8.1",
            "text": "Before purchasing an eSIM Plan, you must verify that:",
            "items": [
              "(a) your device supports eSIM technology",
              "(b) your device is network-unlocked where required",
              "(c) your device supports the selected plan’s technical requirements",
              "(d) your operating system is sufficiently updated",
              "(e) the selected destination or region is correct",
              "(f) the data allowance and validity period are suitable",
              "(g) you understand when the validity period begins",
              "(h) you have access to Wi-Fi or another internet connection needed to install the eSIM",
              "(i) the email address used for delivery is correct."
            ]
          },
          {
            "num": "8.2",
            "text": "eSIM compatibility may vary by:",
            "items": [
              "(a) manufacturer",
              "(b) device model",
              "(c) regional device variant",
              "(d) carrier configuration",
              "(e) network-lock status",
              "(f) operating system",
              "(g) software version."
            ]
          },
          {
            "num": "8.3",
            "text": "A device model may support eSIM in one country or configuration but not in another."
          },
          {
            "num": "8.4",
            "text": "You must not rely only on the general model name when device-region or carrier restrictions may apply."
          }
        ]
      },
      {
        "title": "Installation and Activation",
        "blocks": [
          {
            "num": "9.1",
            "text": "Digital Delivery does not mean that the eSIM has already been installed or activated."
          },
          {
            "num": "9.2",
            "text": "Installation means adding the eSIM profile to a Supported Device."
          },
          {
            "num": "9.3",
            "text": "Activation means the eSIM Plan starts, becomes usable, or connects to a supported network in accordance with the Plan Details."
          },
          {
            "num": "9.4",
            "text": "Depending on the eSIM Plan, its validity period may begin:",
            "items": [
              "(a) when the Order is completed",
              "(b) when the eSIM is provisioned",
              "(c) when Digital Delivery occurs",
              "(d) when the QR Code is scanned",
              "(e) when the eSIM is installed",
              "(f) when it is first activated",
              "(g) when it first connects to a supported network",
              "(h) at another time stated in the Plan Details."
            ]
          },
          {
            "num": "9.5",
            "text": "You must review the Plan Details and delivery instructions before scanning, installing, or activating the eSIM."
          },
          {
            "num": "9.6",
            "text": "You should not install or activate the eSIM earlier than needed unless you understand the applicable validity rules."
          },
          {
            "num": "9.7",
            "text": "Some eSIM profiles may be:",
            "items": [
              "(a) single-use",
              "(b) non-transferable",
              "(c) installable only once",
              "(d) limited to a single Supported Device."
            ]
          },
          {
            "num": "9.8",
            "text": "Deleting an eSIM profile, resetting your device, installing it on the wrong device, or attempting an unsupported transfer may make the profile impossible to recover or reinstall."
          }
        ]
      },
      {
        "title": "QR Code and Activation Security",
        "blocks": [
          {
            "num": "10.1",
            "text": "QR Codes, activation codes, and installation details are provided for your own lawful use."
          },
          {
            "num": "10.2",
            "text": "You must keep them secure and must not:",
            "items": [
              "(a) publish them",
              "(b) forward them to unauthorised persons",
              "(c) sell or resell them",
              "(d) share them publicly",
              "(e) upload them to public websites or social media",
              "(f) use them for unauthorised commercial purposes."
            ]
          },
          {
            "num": "10.3",
            "text": "If another person uses the QR Code because you shared it or failed to protect it, we may be unable to issue a replacement or refund, except where required by law."
          },
          {
            "num": "10.4",
            "text": "If you believe that your QR Code or activation information has been accessed without authorisation, contact us promptly at info@esim-ex.com."
          }
        ]
      },
      {
        "title": "Data-Only Service",
        "blocks": [
          {
            "num": "11.1",
            "text": "Unless expressly stated otherwise in the Plan Details, Esim-Ex eSIM Plans are data-only."
          },
          {
            "num": "11.2",
            "text": "Data-only plans may not include:",
            "items": [
              "(a) voice calls",
              "(b) SMS",
              "(c) a local telephone number",
              "(d) inbound calls",
              "(e) emergency calling",
              "(f) services provided by your primary mobile carrier."
            ]
          },
          {
            "num": "11.3",
            "text": "You must not rely on a data-only eSIM Plan as your sole means of emergency communication."
          },
          {
            "num": "11.4",
            "text": "You are responsible for managing:",
            "items": [
              "(a) mobile data selection",
              "(b) roaming settings",
              "(c) SIM priority",
              "(d) APN settings, where required",
              "(e) call and SMS settings",
              "(f) hotspot settings",
              "(g) the status of your primary SIM."
            ]
          },
          {
            "num": "11.5",
            "text": "We are not responsible for charges imposed by your primary mobile carrier because of your device, SIM, roaming, call, or SMS settings."
          }
        ]
      },
      {
        "title": "Network Availability After Delivery",
        "blocks": [
          {
            "num": "12.1",
            "text": "eSIM Plans rely on third-party mobile operators, telecom suppliers, roaming partners, aggregators, and local network infrastructure."
          },
          {
            "num": "12.2",
            "text": "Successful Digital Delivery does not guarantee uninterrupted connectivity in every location within the advertised destination."
          },
          {
            "num": "12.3",
            "text": "Coverage, speed, latency, signal quality, and availability may vary because of:",
            "items": [
              "(a) location",
              "(b) terrain",
              "(c) buildings",
              "(d) network congestion",
              "(e) device capabilities",
              "(f) maintenance",
              "(g) weather",
              "(h) roaming arrangements",
              "(i) local regulation",
              "(j) government action",
              "(k) third-party network performance."
            ]
          },
          {
            "num": "12.4",
            "text": "Unless expressly stated otherwise, we do not guarantee:",
            "items": [
              "(a) minimum speeds",
              "(b) uninterrupted connectivity",
              "(c) continuous coverage",
              "(d) constant latency",
              "(e) availability of a particular network technology",
              "(f) access through every local mobile network."
            ]
          },
          {
            "num": "12.5",
            "text": "Network variation outside our reasonable control is different from a provisioning or delivery failure attributable to us or our fulfilment chain."
          }
        ]
      },
      {
        "title": "Faulty QR Codes and Provisioning Failures",
        "blocks": [
          {
            "num": "13.1",
            "text": "A technical delivery or provisioning issue may include:",
            "items": [
              "(a) no QR Code being provided",
              "(b) a corrupted or unreadable QR Code",
              "(c) an invalid activation code",
              "(d) a QR Code that cannot be installed because of a supplier-side fault",
              "(e) delivery of the wrong eSIM Plan",
              "(f) failure to provision the purchased plan",
              "(g) material inconsistency between the delivered plan and the Plan Details."
            ]
          },
          {
            "num": "13.2",
            "text": "If you experience such an issue, contact us promptly at info@esim-ex.com."
          },
          {
            "num": "13.3",
            "text": "You should provide:",
            "items": [
              "(a) your Order reference",
              "(b) the email address used for the Order",
              "(c) the eSIM Plan purchased",
              "(d) your device model",
              "(e) operating system version",
              "(f) intended destination",
              "(g) screenshots or error messages",
              "(h) installation or activation steps already attempted."
            ]
          },
          {
            "num": "13.4",
            "text": "We may review:",
            "items": [
              "(a) payment records",
              "(b) delivery records",
              "(c) email transmission records",
              "(d) QR Code generation records",
              "(e) supplier provisioning records",
              "(f) activation status",
              "(g) network information",
              "(h) support correspondence",
              "(i) information provided by you."
            ]
          }
        ]
      },
      {
        "title": "Remedies for Delivery and Provisioning Failures",
        "blocks": [
          {
            "num": "14.1",
            "text": "Where an eSIM Plan is not delivered, or the QR Code, activation details, or eSIM profile are faulty because of a problem attributable to us or our fulfilment chain, we will first use reasonable efforts to provide an effective remedy."
          },
          {
            "num": "14.2",
            "text": "The initial remedy may include:",
            "items": [
              "(a) re-sending the delivery email",
              "(b) re-delivering the QR Code",
              "(c) issuing corrected activation details",
              "(d) correcting the provisioning",
              "(e) providing installation or activation assistance",
              "(f) replacing the faulty eSIM Plan with an equivalent functioning plan",
              "(g) restoring Wallet Balance deducted incorrectly."
            ]
          },
          {
            "num": "14.3",
            "text": "The remedy will be provided:",
            "items": [
              "(a) without additional charge",
              "(b) within a reasonable time",
              "(c) without significant inconvenience where reasonably possible."
            ]
          },
          {
            "num": "14.4",
            "text": "If correction, re-delivery, or replacement is:",
            "items": [
              "(a) impossible",
              "(b) disproportionate",
              "(c) unsuccessful",
              "(d) not completed within a reasonable time",
              "(e) likely to cause significant inconvenience,"
            ]
          },
          {
            "text": "we may provide:",
            "items": [
              "(a) a full refund",
              "(b) a proportionate refund",
              "(c) an appropriate price reduction",
              "(d) Wallet Balance restoration",
              "(e) another remedy agreed with you or required by law."
            ]
          },
          {
            "num": "14.5",
            "text": "A full refund will normally be appropriate where:",
            "items": [
              "(a) no usable eSIM Plan was delivered",
              "(b) the QR Code is unusable because of a supplier-side or provisioning fault",
              "(c) the purchased service cannot be provided at all",
              "(d) the delivered eSIM Plan is materially different and no acceptable replacement is available",
              "(e) mandatory law requires a full refund."
            ]
          },
          {
            "num": "14.6",
            "text": "A proportionate refund or price reduction may be appropriate where:",
            "items": [
              "(a) part of the service was successfully supplied or used",
              "(b) only part of the validity period was affected",
              "(c) only part of the data allowance or service value was lost",
              "(d) a proportionate remedy is required by law."
            ]
          },
          {
            "num": "14.7",
            "text": "Further refund rules are set out in our Refund and Cancellation Policy."
          }
        ]
      },
      {
        "title": "Issues Not Normally Treated as Delivery Failures",
        "blocks": [
          {
            "num": "15.1",
            "text": "Subject to mandatory consumer rights, the following will not normally be treated as a delivery or provisioning failure attributable to Esim-Ex:",
            "items": [
              "(a) an incorrect email address supplied by you",
              "(b) an incompatible or network-locked device",
              "(c) an unsupported regional device variant",
              "(d) outdated device software",
              "(e) incorrect installation",
              "(f) activation on the wrong device",
              "(g) premature activation",
              "(h) deletion of the eSIM profile",
              "(i) incorrect APN, roaming, or SIM settings",
              "(j) use outside the supported destination or validity period",
              "(k) your failure to follow the supplied instructions",
              "(l) local network congestion or temporary coverage variation",
              "(m) charges imposed by your primary carrier."
            ]
          },
          {
            "num": "15.2",
            "text": "We may still provide reasonable troubleshooting assistance even where the issue is not attributable to us."
          }
        ]
      },
      {
        "title": "Immediate Supply and Cancellation Rights",
        "blocks": [
          {
            "num": "16.1",
            "text": "eSIM Plans are digital products supplied electronically."
          },
          {
            "num": "16.2",
            "text": "By requesting immediate Digital Delivery, you ask us to begin supplying the eSIM Plan before the end of any statutory cancellation period that may otherwise apply."
          },
          {
            "num": "16.3",
            "text": "Where required by applicable law, you may be asked to confirm that:",
            "items": [
              "(a) you expressly request immediate Digital Delivery",
              "(b) you acknowledge that your statutory cancellation right may be lost once digital supply begins."
            ]
          },
          {
            "num": "16.4",
            "text": "Your cancellation right will only be treated as lost:",
            "items": [
              "(a) to the extent permitted by applicable law",
              "(b) where the required express consent and acknowledgement were validly obtained."
            ]
          },
          {
            "num": "16.5",
            "text": "Digital supply may be treated as having begun once the eSIM Plan, QR Code, activation details, or installation information has been:",
            "items": [
              "(a) generated",
              "(b) allocated",
              "(c) provisioned",
              "(d) sent",
              "(e) otherwise made electronically available."
            ]
          },
          {
            "num": "16.6",
            "text": "Loss of a cancellation right does not remove your mandatory rights where the eSIM Plan is:",
            "items": [
              "(a) not delivered",
              "(b) materially defective",
              "(c) materially not as described",
              "(d) unusable because of a fault attributable to us or our fulfilment chain."
            ]
          }
        ]
      },
      {
        "title": "Wallet Balance Delivery",
        "blocks": [
          {
            "num": "17.1",
            "text": "Where Wallet Balance is available, purchased Balance is delivered digitally by crediting it to your Account after successful payment authorisation."
          },
          {
            "num": "17.2",
            "text": "Wallet Balance is treated as delivered when it is credited to your Account or otherwise made available for use."
          },
          {
            "num": "17.3",
            "text": "Wallet Balance is not delivered by post or courier."
          },
          {
            "num": "17.4",
            "text": "If purchased Wallet Balance is not credited because of a technical issue attributable to us, we will use reasonable efforts to:",
            "items": [
              "(a) correct the Account record",
              "(b) credit the missing Balance",
              "(c) reverse a duplicate deduction",
              "(d) provide another appropriate remedy."
            ]
          },
          {
            "num": "17.5",
            "text": "Paid Wallet Balance is generally non-refundable once used, except where:",
            "items": [
              "(a) required by applicable consumer law",
              "(b) a valid statutory cancellation right applies to unused Balance",
              "(c) a technical issue attributable to us permanently prevents use",
              "(d) the Service is permanently discontinued and the Balance can no longer reasonably be used",
              "(e) another exception in our Refund and Cancellation Policy applies."
            ]
          }
        ]
      },
      {
        "title": "Prohibited Jurisdictions",
        "blocks": [
          {
            "num": "18.1",
            "text": "Esim-Ex does not deliver, activate, or support eSIM Plans in or for the following Prohibited Jurisdictions:",
            "items": [
              "Sudan",
              "Democratic Republic of the Congo",
              "Iran",
              "Mali",
              "Myanmar (Burma)",
              "North Korea",
              "South Sudan",
              "Syria",
              "Yemen",
              "Afghanistan",
              "Belarus",
              "Central African Republic",
              "Cuba",
              "Haiti",
              "Iraq",
              "Russia",
              "Somalia",
              "Venezuela",
              "Zimbabwe."
            ],
            "bullet": true
          },
          {
            "num": "18.2",
            "text": "The list may change from time to time because of:",
            "items": [
              "(a) applicable laws or sanctions",
              "(b) supplier restrictions",
              "(c) payment-provider rules",
              "(d) network availability",
              "(e) security or fraud risks",
              "(f) commercial restrictions."
            ]
          },
          {
            "num": "18.3",
            "text": "We may hold, refuse, or cancel Digital Delivery where:",
            "items": [
              "(a) the destination is prohibited",
              "(b) the Order is connected with a Prohibited Jurisdiction",
              "(c) a sanctions or compliance restriction applies",
              "(d) the supplier or payment provider prevents fulfilment",
              "(e) we reasonably suspect circumvention of this section."
            ]
          },
          {
            "num": "18.4",
            "text": "If an Order is cancelled before Digital Delivery under this section, we will normally issue a refund or restore the relevant Wallet Balance unless:",
            "items": [
              "(a) payment is frozen or blocked by law",
              "(b) a refund is legally prohibited",
              "(c) the payment was fraudulent or unauthorised",
              "(d) another lawful restriction applies."
            ]
          }
        ]
      },
      {
        "title": "Cancellation or Discontinuation by Esim-Ex",
        "blocks": [
          {
            "num": "19.1",
            "text": "We may cancel an individual Order before Digital Delivery where:",
            "items": [
              "(a) the eSIM Plan is unavailable",
              "(b) the supplier cannot fulfil it",
              "(c) payment cannot be verified",
              "(d) a technical error prevents fulfilment",
              "(e) a legal or Prohibited Jurisdiction restriction applies",
              "(f) fraud or abuse is reasonably suspected."
            ]
          },
          {
            "num": "19.2",
            "text": "If we cancel an Order before Digital Delivery for reasons unrelated to your breach or fraud, we will:",
            "items": [
              "(a) refund the amount paid",
              "or (b) restore the relevant Wallet Balance."
            ]
          },
          {
            "num": "19.3",
            "text": "If Esim-Ex permanently discontinues the Service for reasons unrelated to your breach:",
            "items": [
              "(a) undelivered paid Orders will be refunded",
              "(b) unused paid Wallet Balance that can no longer reasonably be used will be refunded",
              "(c) we will use reasonable efforts to allow active eSIM Plans to continue until their original expiry",
              "(d) if an active eSIM Plan is terminated early, we will provide an appropriate replacement, proportionate refund, price reduction, Wallet Balance restoration, or another remedy required by law."
            ]
          },
          {
            "num": "19.4",
            "text": "Promotional Balance is not refundable unless required by law or expressly stated otherwise."
          }
        ]
      },
      {
        "title": "Security, Verification, and Delivery Holds",
        "blocks": [
          {
            "num": "20.1",
            "text": "We may delay or hold Digital Delivery where reasonably necessary for:",
            "items": [
              "(a) payment authentication",
              "(b) fraud prevention",
              "(c) Account security",
              "(d) chargeback-risk review",
              "(e) sanctions screening",
              "(f) legal compliance",
              "(g) supplier verification",
              "(h) technical investigation."
            ]
          },
          {
            "num": "20.2",
            "text": "We may request additional information reasonably necessary to verify:",
            "items": [
              "(a) the purchaser",
              "(b) the payment method",
              "(c) the intended destination",
              "(d) the delivery email",
              "(e) another material Order detail."
            ]
          },
          {
            "num": "20.3",
            "text": "If verification cannot be completed, we may cancel the Order and provide an appropriate refund unless payment is legally blocked, fraudulent, or otherwise restricted."
          }
        ]
      },
      {
        "title": "Delivery Records and Disputes",
        "blocks": [
          {
            "num": "21.1",
            "text": "We may retain records relating to:",
            "items": [
              "(a) Order placement",
              "(b) payment authorisation",
              "(c) QR Code generation",
              "(d) email delivery",
              "(e) supplier provisioning",
              "(f) activation",
              "(g) support correspondence",
              "(h) refunds and disputes."
            ]
          },
          {
            "num": "21.2",
            "text": "These records may be used to:",
            "items": [
              "(a) investigate delivery issues",
              "(b) provide technical support",
              "(c) assess refund requests",
              "(d) respond to payment disputes or chargebacks",
              "(e) prevent fraud",
              "(f) comply with legal obligations."
            ]
          },
          {
            "num": "21.3",
            "text": "If you dispute Digital Delivery, you should contact us first where reasonably practicable so that we can investigate and attempt to resolve the matter."
          },
          {
            "num": "21.4",
            "text": "Contacting us first does not prevent you from exercising a legitimate right to contact your bank, payment provider, regulator, alternative dispute body, or court."
          }
        ]
      },
      {
        "title": "Changes to This Policy",
        "blocks": [
          {
            "num": "22.1",
            "text": "We may update this Digital Delivery Policy for legal, regulatory, operational, technical, payment-related, supplier-related, telecom-related, security, or commercial reasons."
          },
          {
            "num": "22.2",
            "text": "The latest version will be published on the Service with an updated effective date."
          },
          {
            "num": "22.3",
            "text": "Changes apply prospectively unless otherwise required by law."
          },
          {
            "num": "22.4",
            "text": "Changes will not reduce mandatory rights already applying to completed consumer Orders."
          }
        ]
      },
      {
        "title": "Contact Details",
        "blocks": [
          {
            "text": "For Digital Delivery, QR Code, activation, provisioning, or delivery-related enquiries, contact:"
          },
          {
            "company": [
              "ESIMEX LTD",
              "Company number: 17173983",
              "Registered office: Dept 6750, 196 High Road, Wood Green, London, United Kingdom, N22 8HH",
              "Email: info@esim-ex.com",
              "Phone: +44 7447 196114",
              "Website: https://www.esim-ex.com"
            ]
          }
        ]
      }
    ]
  },
  {
    "slug": "payment",
    "title": "Payment Policy",
    "effectiveDate": "Effective date: 28 July 2026",
    "intro": [
      {
        "text": "This Payment Policy explains how prices, taxes, payments, Wallet Balance top-ups, payment authorisation, digital fulfilment, refunds, payment disputes, chargebacks, and related payment matters are handled when you use Esim-Ex and the related services available at https://www.esim-ex.com (the “Service”)."
      },
      {
        "text": "This Policy is issued by:"
      },
      {
        "text": "This Policy should be read together with our Terms and Conditions, Refund and Cancellation Policy, Digital Delivery Policy, Acceptable Use and Fair Use Policy, Privacy Policy, and the Plan Details displayed before purchase."
      },
      {
        "text": "Nothing in this Policy excludes, restricts, or limits any mandatory rights or remedies available under applicable consumer law."
      }
    ],
    "company": [
      "ESIMEX LTD",
      "Company number: 17173983",
      "Registered office: Dept 6750, 196 High Road, Wood Green, London, United Kingdom, N22 8HH",
      "Email: info@esim-ex.com",
      "Phone: +44 7447 196114"
    ],
    "sections": [
      {
        "title": "Scope",
        "blocks": [
          {
            "num": "1.1",
            "text": "This Policy applies to:",
            "items": [
              "(a) purchases of eSIM Plans",
              "(b) Wallet Balance top-ups",
              "(c) payments made using Wallet Balance",
              "(d) card and other payment methods displayed at checkout",
              "(e) payment authorisation and authentication",
              "(f) failed, pending, duplicated, reversed, or disputed payments",
              "(g) refunds and Wallet Balance restoration",
              "(h) complaints and chargebacks",
              "(i) payment consequences of Account closure",
              "(j) permanent discontinuation of the Service."
            ]
          },
          {
            "num": "1.2",
            "text": "Esim-Ex provides digital eSIM services only. We do not sell or ship physical SIM cards or other physical goods."
          },
          {
            "num": "1.3",
            "text": "Payment for an eSIM Plan relates to the digital supply of the selected eSIM Plan, which may include:",
            "items": [
              "(a) a QR Code",
              "(b) activation details",
              "(c) installation instructions",
              "(d) Plan Details",
              "(e) technical provisioning",
              "(f) related digital support."
            ]
          }
        ]
      },
      {
        "title": "Definitions",
        "blocks": [
          {
            "text": "For the purposes of this Policy:"
          },
          {
            "text": "Account means your registered user account on the Service, where Account functionality is available.",
            "definition": true
          },
          {
            "text": "Digital Delivery means electronic delivery of a QR Code, activation code, installation details, Plan Details, or comparable digital access information by email or another digital method designated by us.",
            "definition": true
          },
          {
            "text": "eSIM Plan means a digital mobile connectivity package made available through the Service with its own destination, coverage area, data allowance, validity period, activation rules, supported networks, and other conditions.",
            "definition": true
          },
          {
            "text": "Order means a completed purchase of an eSIM Plan, Wallet Balance, or another paid digital service through Esim-Ex.",
            "definition": true
          },
          {
            "text": "Plan Details means the destination, coverage area, data allowance, validity period, activation method, supported networks, restrictions, and other conditions displayed before purchase or provided at delivery.",
            "definition": true
          },
          {
            "text": "Prohibited Jurisdiction means any country, territory, region, person, organisation, entity, or location to which Esim-Ex does not provide the Service because of legal, regulatory, sanctions-related, supplier, payment-provider, network, security, or commercial restrictions.",
            "definition": true
          },
          {
            "text": "Promotional Balance means Wallet Balance, credit, referral value, voucher, trial value, bonus, or goodwill credit granted without payment or as part of a promotion.",
            "definition": true
          },
          {
            "text": "QR Code means the digital QR code or equivalent activation information used to install or activate an eSIM Plan.",
            "definition": true
          },
          {
            "text": "Wallet Balance or Balance means prepaid value recorded in your Account and available for use only within Esim-Ex to purchase eligible eSIM Plans or related digital services.",
            "definition": true
          }
        ]
      },
      {
        "title": "Accepted Payment Methods",
        "blocks": [
          {
            "num": "3.1",
            "text": "The payment methods available to you are those displayed on the Service or at checkout at the time of purchase."
          },
          {
            "num": "3.2",
            "text": "Available payment methods may include:",
            "items": [
              "(a) Visa",
              "(b) Mastercard",
              "(c) supported digital wallets",
              "(d) Wallet Balance",
              "(e) other payment methods introduced by us or our payment providers."
            ]
          },
          {
            "num": "3.3",
            "text": "The availability of a payment method may depend on:",
            "items": [
              "(a) your country or region",
              "(b) the selected currency",
              "(c) the payment amount",
              "(d) your device or browser",
              "(e) the payment provider",
              "(f) fraud or security controls",
              "(g) legal or supplier restrictions."
            ]
          },
          {
            "num": "3.4",
            "text": "We may add, remove, suspend, or change payment methods at any time for operational, technical, legal, security, payment-provider, or commercial reasons."
          },
          {
            "num": "3.5",
            "text": "We do not guarantee that every payment method will be available for every transaction."
          }
        ]
      },
      {
        "title": "Prices and Taxes",
        "blocks": [
          {
            "num": "4.1",
            "text": "The price payable for an eSIM Plan, Wallet Balance top-up, or related digital service is the final price displayed at checkout before you confirm payment."
          },
          {
            "num": "4.2",
            "text": "Prices displayed to consumers include any VAT or other sales taxes that Esim-Ex is required to charge, unless the Service expressly states otherwise before the Order is placed."
          },
          {
            "num": "4.3",
            "text": "No additional tax charged by Esim-Ex will be added after you confirm the final checkout price, except where:",
            "items": [
              "(a) information provided by you was materially incorrect",
              "(b) a change is required by applicable law",
              "(c) you expressly agree to the amended amount before payment."
            ]
          },
          {
            "num": "4.4",
            "text": "The price displayed for a particular eSIM Plan may vary because of:",
            "items": [
              "(a) destination or coverage region",
              "(b) data allowance",
              "(c) validity period",
              "(d) supplier pricing",
              "(e) currency",
              "(f) promotional discounts",
              "(g) applicable taxes",
              "(h) other plan-specific factors."
            ]
          },
          {
            "num": "4.5",
            "text": "We may change prices at any time. A change will not affect an Order already completed and accepted, except in the case of a manifest pricing or technical error."
          }
        ]
      },
      {
        "title": "Currencies and Currency Conversion",
        "blocks": [
          {
            "num": "5.1",
            "text": "Prices may be displayed and processed in one or more currencies supported by the Service."
          },
          {
            "num": "5.2",
            "text": "The transaction currency will be shown before you confirm payment."
          },
          {
            "num": "5.3",
            "text": "Your bank, card issuer, or payment provider may apply:",
            "items": [
              "(a) foreign transaction fees",
              "(b) exchange-rate margins",
              "(c) currency conversion charges",
              "(d) international card fees",
              "(e) other third-party charges."
            ]
          },
          {
            "num": "5.4",
            "text": "Such charges are determined independently by the relevant third party and are not charged or controlled by Esim-Ex."
          },
          {
            "num": "5.5",
            "text": "Unless required by law, we are not responsible for:",
            "items": [
              "(a) third-party conversion fees",
              "(b) exchange-rate differences",
              "(c) changes in value between the payment and refund dates",
              "(d) bank or card-provider charges."
            ]
          }
        ]
      },
      {
        "title": "Payment Authorisation",
        "blocks": [
          {
            "num": "6.1",
            "text": "By submitting payment details or confirming a payment using Wallet Balance, you authorise us and our payment providers to process the amount displayed for the relevant Order."
          },
          {
            "num": "6.2",
            "text": "You represent and warrant that:",
            "items": [
              "(a) you are authorised to use the selected payment method",
              "(b) the payment information provided is accurate and complete",
              "(c) sufficient funds, credit, or Wallet Balance are available",
              "(d) the payment is not fraudulent, unauthorised, or unlawful",
              "(e) the Order does not breach our Terms or policies."
            ]
          },
          {
            "num": "6.3",
            "text": "An Order is not guaranteed to be accepted merely because payment information has been submitted."
          },
          {
            "num": "6.4",
            "text": "We may refuse, delay, hold, reverse, or cancel a payment or Order where reasonably necessary because of:",
            "items": [
              "(a) failed payment authorisation",
              "(b) suspected fraud or abuse",
              "(c) incorrect payment information",
              "(d) payment-provider restrictions",
              "(e) sanctions or compliance requirements",
              "(f) supplier restrictions",
              "(g) technical errors",
              "(h) manifest pricing errors",
              "(i) inability to fulfil the selected eSIM Plan."
            ]
          }
        ]
      },
      {
        "title": "Payment Authentication and 3D Secure",
        "blocks": [
          {
            "num": "7.1",
            "text": "Card payments may be subject to Strong Customer Authentication, 3D Secure, one-time passwords, banking-app approval, biometric verification, or another authentication process required by your bank, card issuer, or payment provider."
          },
          {
            "num": "7.2",
            "text": "Authentication is generally conducted by the relevant payment provider or card issuer rather than directly by Esim-Ex."
          },
          {
            "num": "7.3",
            "text": "If authentication:",
            "items": [
              "(a) fails",
              "(b) is declined",
              "(c) is cancelled",
              "(d) is not completed",
              "(e) expires before completion,"
            ]
          },
          {
            "text": "the payment and Order may not be processed."
          },
          {
            "num": "7.4",
            "text": "Completion of 3D Secure or another authentication process does not guarantee that an Order will be accepted where another payment, fraud, legal, supplier, or technical restriction applies."
          },
          {
            "num": "7.5",
            "text": "We may retain limited authentication or transaction status information supplied by the payment provider, but we do not receive or control your bank authentication credentials."
          }
        ]
      },
      {
        "title": "Payment Security and Card Data",
        "blocks": [
          {
            "num": "8.1",
            "text": "Payments are processed through third-party payment service providers."
          },
          {
            "num": "8.2",
            "text": "We do not store full payment card numbers or card security codes on our own servers."
          },
          {
            "num": "8.3",
            "text": "Depending on the provider, payment information may be processed using:",
            "items": [
              "(a) encryption",
              "(b) tokenisation",
              "(c) fraud monitoring",
              "(d) payment authentication",
              "(e) access controls",
              "(f) other security measures."
            ]
          },
          {
            "num": "8.4",
            "text": "You are responsible for protecting:",
            "items": [
              "(a) your payment card",
              "(b) online banking credentials",
              "(c) authentication codes",
              "(d) payment devices",
              "(e) email account",
              "(f) Esim-Ex Account credentials."
            ]
          },
          {
            "num": "8.5",
            "text": "You must contact us promptly if you believe your payment method, Wallet Balance, or Account has been used without authorisation."
          }
        ]
      },
      {
        "title": "When Payment Is Taken",
        "blocks": [
          {
            "num": "9.1",
            "text": "Payment for an eSIM Plan is normally taken when you confirm the Order at checkout."
          },
          {
            "num": "9.2",
            "text": "Where Wallet Balance is used, the relevant amount may be deducted when:",
            "items": [
              "(a) you confirm the purchase",
              "(b) the eSIM Plan is allocated",
              "(c) technical provisioning begins",
              "(d) performance of the digital service begins."
            ]
          },
          {
            "num": "9.3",
            "text": "Payment for a Wallet Balance top-up is taken when you complete the relevant checkout process."
          },
          {
            "num": "9.4",
            "text": "Digital provisioning may begin shortly after successful payment authorisation."
          },
          {
            "num": "9.5",
            "text": "A temporary bank authorisation or pending card entry does not always mean that a payment has been finally captured."
          },
          {
            "num": "9.6",
            "text": "The release of an unsuccessful or unused bank authorisation is controlled by your bank or payment provider."
          }
        ]
      },
      {
        "title": "Digital Delivery Following Payment",
        "blocks": [
          {
            "num": "10.1",
            "text": "Successful payment results in digital fulfilment rather than physical shipment."
          },
          {
            "num": "10.2",
            "text": "Once payment has been authorised and the Order approved, the eSIM Plan is normally generated and sent by email within 5 minutes."
          },
          {
            "num": "10.3",
            "text": "You should allow up to 30 minutes for:",
            "items": [
              "(a) payment confirmation",
              "(b) fraud or security screening",
              "(c) supplier allocation or purchase of the eSIM",
              "(d) technical provisioning",
              "(e) QR Code generation",
              "(f) preparation and transmission of the delivery email."
            ]
          },
          {
            "num": "10.4",
            "text": "Delivery may take longer where reasonably necessary because of:",
            "items": [
              "(a) payment verification",
              "(b) 3D Secure or banking authentication",
              "(c) supplier or network delay",
              "(d) technical outage",
              "(e) unusually high demand",
              "(f) inaccurate Order information",
              "(g) sanctions or compliance review",
              "(h) circumstances outside our reasonable control."
            ]
          },
          {
            "num": "10.5",
            "text": "If the delivery email has not arrived within 30 minutes, you should:",
            "items": [
              "(a) check your inbox",
              "(b) check spam, junk, promotions, quarantine, and filtered folders",
              "(c) confirm that the email address used for the Order is correct",
              "(d) contact us at info@esim-ex.com."
            ]
          },
          {
            "num": "10.6",
            "text": "Further details are set out in our Digital Delivery Policy."
          }
        ]
      },
      {
        "title": "Immediate Digital Supply",
        "blocks": [
          {
            "num": "11.1",
            "text": "eSIM Plans are digital products supplied electronically."
          },
          {
            "num": "11.2",
            "text": "By requesting immediate Digital Delivery, you ask us to begin supplying the eSIM Plan before the end of any statutory cancellation period that might otherwise apply."
          },
          {
            "num": "11.3",
            "text": "Where required by law, you may be asked to confirm that:",
            "items": [
              "(a) you expressly request immediate Digital Delivery",
              "(b) you acknowledge that your cancellation right may be lost once digital supply begins."
            ]
          },
          {
            "num": "11.4",
            "text": "A cancellation right will only be treated as lost:",
            "items": [
              "(a) to the extent permitted by applicable law",
              "(b) where the required express consent and acknowledgement were validly obtained."
            ]
          },
          {
            "num": "11.5",
            "text": "Loss of a cancellation right does not remove mandatory remedies where an eSIM Plan is:",
            "items": [
              "(a) not delivered",
              "(b) materially defective",
              "(c) materially not as described",
              "(d) unusable because of a fault attributable to us or our fulfilment chain."
            ]
          }
        ]
      },
      {
        "title": "Wallet Balance",
        "blocks": [
          {
            "num": "12.1",
            "text": "Where available, Wallet Balance allows you to prepay value into your Account and use it only within Esim-Ex to purchase eligible eSIM Plans or related digital services."
          },
          {
            "num": "12.2",
            "text": "Wallet Balance is an internal prepaid account balance."
          },
          {
            "num": "12.3",
            "text": "Wallet Balance is not:",
            "items": [
              "(a) legal tender",
              "(b) electronic money",
              "(c) a general-purpose payment instrument",
              "(d) a bank account or deposit",
              "(e) an investment or security",
              "(f) a cryptoasset",
              "(g) a regulated financial product."
            ]
          },
          {
            "num": "12.4",
            "text": "Wallet Balance:",
            "items": [
              "(a) does not accrue interest",
              "(b) has no cash value outside the Service",
              "(c) cannot ordinarily be withdrawn as cash",
              "(d) cannot be transferred unless we expressly agree otherwise",
              "(e) cannot be resold, exchanged, pledged, assigned, or commercially exploited",
              "(f) may only be used in accordance with our Terms and policies."
            ]
          },
          {
            "num": "12.5",
            "text": "Paid Wallet Balance is normally credited after successful payment authorisation."
          },
          {
            "num": "12.6",
            "text": "Wallet Balance is treated as delivered when it is credited to your Account or otherwise made available for use."
          },
          {
            "num": "12.7",
            "text": "Unless expressly stated otherwise, paid Wallet Balance does not expire while:",
            "items": [
              "(a) your Account remains open and in good standing",
              "(b) Esim-Ex remains operational",
              "(c) eligible services remain reasonably available."
            ]
          },
          {
            "num": "12.8",
            "text": "The statement that paid Wallet Balance does not ordinarily expire does not guarantee that:",
            "items": [
              "(a) the Service will operate indefinitely",
              "(b) every eSIM Plan will remain available",
              "(c) your Account can never be closed",
              "(d) Wallet Balance can always be used in every destination."
            ]
          }
        ]
      },
      {
        "title": "Wallet Balance Refund Exceptions",
        "blocks": [
          {
            "num": "13.1",
            "text": "Paid Wallet Balance is generally non-refundable once used."
          },
          {
            "num": "13.2",
            "text": "Unused paid Wallet Balance may be refundable where:",
            "items": [
              "(a) you validly exercise an applicable statutory cancellation right",
              "(b) it was credited incorrectly",
              "(c) payment was duplicated",
              "(d) a technical issue attributable to us permanently prevents its use",
              "(e) Esim-Ex permanently discontinues the Service and the Balance can no longer reasonably be used",
              "(f) we close your Account for reasons unrelated to your breach and prevent reasonable use of the Balance",
              "(g) refund is otherwise required by applicable consumer law",
              "(h) we expressly agree otherwise."
            ]
          },
          {
            "num": "13.3",
            "text": "Wallet Balance used to purchase an eSIM Plan will be assessed under the refund rules applying to that eSIM Plan."
          },
          {
            "num": "13.4",
            "text": "Promotional Balance:",
            "items": [
              "(a) is not a cash purchase",
              "(b) has no cash value",
              "(c) is normally non-refundable",
              "(d) may be subject to expiry or separate promotional restrictions."
            ]
          },
          {
            "num": "13.5",
            "text": "We may freeze, adjust, or reverse Wallet Balance affected by:",
            "items": [
              "(a) fraud or abuse",
              "(b) chargeback or payment reversal",
              "(c) unauthorised payment",
              "(d) duplicate crediting",
              "(e) manifest error",
              "(f) technical malfunction",
              "(g) legal obligation."
            ]
          }
        ]
      },
      {
        "title": "Failed, Declined, or Pending Payments",
        "blocks": [
          {
            "num": "14.1",
            "text": "If payment fails, is declined, or is not completed, the Order may not be processed or delivered."
          },
          {
            "num": "14.2",
            "text": "A payment may fail because of:",
            "items": [
              "(a) insufficient funds",
              "(b) incorrect card or billing information",
              "(c) card expiry",
              "(d) bank or issuer refusal",
              "(e) failed authentication",
              "(f) transaction limits",
              "(g) geographic or currency restrictions",
              "(h) fraud or security controls",
              "(i) technical error."
            ]
          },
          {
            "num": "14.3",
            "text": "If your bank shows a pending amount but the Order was not completed, the entry may represent a temporary authorisation rather than a completed charge."
          },
          {
            "num": "14.4",
            "text": "You should contact your bank or payment provider regarding the release of a pending authorisation."
          },
          {
            "num": "14.5",
            "text": "If payment appears to have been completed but no Order is recorded, contact us with:",
            "items": [
              "(a) the payment date",
              "(b) the payment amount",
              "(c) the payment reference",
              "(d) the email address used at checkout",
              "(e) any available receipt or screenshot."
            ]
          }
        ]
      },
      {
        "title": "Duplicate and Incorrect Payments",
        "blocks": [
          {
            "num": "15.1",
            "text": "If duplicate payment was taken because of a technical error attributable to us or our payment flow, we will refund or reverse the duplicated amount."
          },
          {
            "num": "15.2",
            "text": "If Wallet Balance was deducted more than once for the same Order, we will correct the relevant Balance record."
          },
          {
            "num": "15.3",
            "text": "You must notify us promptly if you believe that:",
            "items": [
              "(a) you were charged twice",
              "(b) the amount charged was incorrect",
              "(c) Wallet Balance was deducted incorrectly",
              "(d) payment was taken for an Order that was not created."
            ]
          },
          {
            "num": "15.4",
            "text": "We may review payment, checkout, Wallet Balance, provisioning, and delivery records before making a correction."
          }
        ]
      },
      {
        "title": "Pricing and Technical Errors",
        "blocks": [
          {
            "num": "16.1",
            "text": "We take reasonable steps to keep prices, Wallet Balance amounts, discounts, and checkout information accurate."
          },
          {
            "num": "16.2",
            "text": "If an Order is affected by a manifest pricing, currency, Wallet Balance, promotional, or technical error, we may:",
            "items": [
              "(a) cancel the Order",
              "(b) correct the error",
              "(c) refund the amount paid",
              "(d) restore incorrectly deducted Wallet Balance",
              "(e) offer the opportunity to purchase at the correct price."
            ]
          },
          {
            "num": "16.3",
            "text": "We are not required to honour an obvious or manifest error where a reasonable customer should have recognised that the displayed price or value was incorrect."
          },
          {
            "num": "16.4",
            "text": "This section does not permit us to change the price of a correctly completed and accepted Order merely because the normal price later increased."
          }
        ]
      },
      {
        "title": "Promotions and Discount Codes",
        "blocks": [
          {
            "num": "17.1",
            "text": "Promotional codes, discounts, referral rewards, and special offers may be subject to separate conditions."
          },
          {
            "num": "17.2",
            "text": "Such conditions may include:",
            "items": [
              "(a) expiry dates",
              "(b) usage limits",
              "(c) minimum purchase amounts",
              "(d) eligible eSIM Plans",
              "(e) destination restrictions",
              "(f) Account restrictions",
              "(g) one-use limits",
              "(h) non-combination with other offers."
            ]
          },
          {
            "num": "17.3",
            "text": "Promotional benefits have no cash value and cannot ordinarily be exchanged for money."
          },
          {
            "num": "17.4",
            "text": "We may cancel or reverse a promotional benefit affected by:",
            "items": [
              "(a) fraud",
              "(b) duplicate use",
              "(c) technical error",
              "(d) multiple Account abuse",
              "(e) unauthorised sharing",
              "(f) breach of promotional conditions."
            ]
          }
        ]
      },
      {
        "title": "Payment Holds and Verification",
        "blocks": [
          {
            "num": "18.1",
            "text": "We may delay payment completion, Wallet Balance crediting, or Digital Delivery where reasonably necessary for:",
            "items": [
              "(a) fraud prevention",
              "(b) payment security",
              "(c) chargeback-risk review",
              "(d) sanctions screening",
              "(e) identity or payment verification",
              "(f) supplier restrictions",
              "(g) legal compliance",
              "(h) technical investigation."
            ]
          },
          {
            "num": "18.2",
            "text": "We may request information reasonably necessary to verify:",
            "items": [
              "(a) the purchaser",
              "(b) the payment method",
              "(c) billing information",
              "(d) intended destination",
              "(e) Order legitimacy",
              "(f) Account ownership."
            ]
          },
          {
            "num": "18.3",
            "text": "If verification cannot be completed, we may cancel the Order."
          },
          {
            "num": "18.4",
            "text": "Where an Order is cancelled for reasons unrelated to your fraud or material breach, we will normally:",
            "items": [
              "(a) refund the amount paid",
              "or (b) restore the relevant Wallet Balance."
            ]
          }
        ]
      },
      {
        "title": "Prohibited Jurisdictions",
        "blocks": [
          {
            "num": "19.1",
            "text": "Esim-Ex does not accept payments for, provide, sell, deliver, activate, or support the Service in or for the following Prohibited Jurisdictions:",
            "items": [
              "Sudan",
              "Democratic Republic of the Congo",
              "Iran",
              "Mali",
              "Myanmar (Burma)",
              "North Korea",
              "South Sudan",
              "Syria",
              "Yemen",
              "Afghanistan",
              "Belarus",
              "Central African Republic",
              "Cuba",
              "Haiti",
              "Iraq",
              "Russia",
              "Somalia",
              "Venezuela",
              "Zimbabwe."
            ],
            "bullet": true
          },
          {
            "num": "19.2",
            "text": "The list may change from time to time because of:",
            "items": [
              "(a) applicable law or sanctions",
              "(b) payment-provider requirements",
              "(c) supplier restrictions",
              "(d) network availability",
              "(e) security or fraud concerns",
              "(f) commercial risk decisions."
            ]
          },
          {
            "num": "19.3",
            "text": "We may refuse, hold, reverse, or cancel a payment where:",
            "items": [
              "(a) the intended destination is prohibited",
              "(b) the billing or payment location is connected with a Prohibited Jurisdiction",
              "(c) a sanctions or compliance restriction applies",
              "(d) a payment provider or supplier prevents fulfilment",
              "(e) we reasonably suspect circumvention."
            ]
          },
          {
            "num": "19.4",
            "text": "If an Order is cancelled before Digital Delivery, we will normally issue a refund or restore Wallet Balance unless:",
            "items": [
              "(a) payment is legally frozen or blocked",
              "(b) refund is prohibited by law",
              "(c) payment was fraudulent or unauthorised",
              "(d) another lawful restriction applies."
            ]
          }
        ]
      },
      {
        "title": "Failure to Deliver and Faulty eSIM Remedies",
        "blocks": [
          {
            "num": "20.1",
            "text": "If payment has been successfully completed but:",
            "items": [
              "(a) no usable eSIM Plan is delivered",
              "(b) the QR Code is invalid or faulty",
              "(c) provisioning fails",
              "(d) the wrong plan is delivered",
              "(e) the plan is materially not as described,"
            ]
          },
          {
            "text": "you must contact us promptly."
          },
          {
            "num": "20.2",
            "text": "We will first use reasonable efforts to:",
            "items": [
              "(a) re-send the delivery email",
              "(b) re-deliver the QR Code",
              "(c) correct the technical or provisioning issue",
              "(d) provide installation or activation assistance",
              "(e) replace the eSIM Plan",
              "(f) restore Wallet Balance deducted incorrectly."
            ]
          },
          {
            "num": "20.3",
            "text": "The remedy will be provided:",
            "items": [
              "(a) without additional charge",
              "(b) within a reasonable time",
              "(c) without significant inconvenience where reasonably possible."
            ]
          },
          {
            "num": "20.4",
            "text": "If correction, re-delivery, or replacement is impossible, disproportionate, unsuccessful, or not completed within a reasonable time, we may provide:",
            "items": [
              "(a) a full refund",
              "(b) a proportionate refund",
              "(c) a price reduction",
              "(d) Wallet Balance restoration",
              "(e) another remedy required by law."
            ]
          },
          {
            "num": "20.5",
            "text": "Further details are set out in our Refund and Cancellation Policy."
          }
        ]
      },
      {
        "title": "Refunds",
        "blocks": [
          {
            "num": "21.1",
            "text": "Refund eligibility is governed by:",
            "items": [
              "(a) our Refund and Cancellation Policy",
              "(b) our Terms and Conditions",
              "(c) the Plan Details",
              "(d) the status of delivery, installation, activation, and use",
              "(e) applicable law."
            ]
          },
          {
            "num": "21.2",
            "text": "Approved refunds will not exceed the amount actually paid for the relevant transaction."
          },
          {
            "num": "21.3",
            "text": "Refunds are normally made to the original payment method."
          },
          {
            "num": "21.4",
            "text": "An approved refund will be processed without undue delay and no later than 14 days after we agree that the refund is due, unless a shorter period is required by law."
          },
          {
            "num": "21.5",
            "text": "Your bank, card issuer, or payment provider may require additional time to display the refund."
          },
          {
            "num": "21.6",
            "text": "We are not responsible for third-party processing delays after the refund has been correctly submitted."
          },
          {
            "num": "21.7",
            "text": "We do not ordinarily refund:",
            "items": [
              "(a) exchange-rate differences",
              "(b) bank fees",
              "(c) foreign transaction charges",
              "(d) payment-provider fees",
              "(e) charges from your primary mobile carrier,"
            ]
          },
          {
            "text": "unless required by law."
          }
        ]
      },
      {
        "title": "Account Closure and Wallet Balance",
        "blocks": [
          {
            "num": "22.1",
            "text": "You may request closure of your Account by emailing info@esim-ex.com."
          },
          {
            "num": "22.2",
            "text": "Our support team will contact you to:",
            "items": [
              "(a) verify the request",
              "(b) review pending Orders",
              "(c) identify active eSIM Plans",
              "(d) review remaining Wallet Balance",
              "(e) identify unresolved payments, refunds, or chargebacks",
              "(f) explain the consequences of closure."
            ]
          },
          {
            "num": "22.3",
            "text": "You should normally use any remaining Wallet Balance before voluntarily closing the Account."
          },
          {
            "num": "22.4",
            "text": "Account closure does not automatically entitle you to withdraw Wallet Balance as cash outside the circumstances described in section 13.2."
          },
          {
            "num": "22.5",
            "text": "If we close your Account for reasons unrelated to your breach and prevent reasonable use of remaining paid Wallet Balance, an appropriate refund may be provided."
          },
          {
            "num": "22.6",
            "text": "Promotional Balance may be cancelled when the Account is closed."
          },
          {
            "num": "22.7",
            "text": "Closing an Account does not automatically cancel or refund an eSIM Plan that has already been delivered, installed, activated, or used."
          }
        ]
      },
      {
        "title": "Permanent Service Discontinuation",
        "blocks": [
          {
            "num": "23.1",
            "text": "If Esim-Ex permanently discontinues the Service for reasons unrelated to your breach:",
            "items": [
              "(a) undelivered paid Orders will be refunded",
              "(b) unused paid Wallet Balance that can no longer reasonably be used will be refunded",
              "(c) we will use reasonable efforts to allow active eSIM Plans to continue until their original expiry",
              "(d) an active plan terminated early will be subject to an appropriate replacement, proportionate refund, price reduction, Wallet Balance restoration, or another remedy required by law."
            ]
          },
          {
            "num": "23.2",
            "text": "Promotional Balance is not refundable unless required by law or expressly stated otherwise."
          },
          {
            "num": "23.3",
            "text": "We may request reasonable Account and payment verification before issuing a discontinuation-related refund."
          }
        ]
      },
      {
        "title": "Payment Complaints and Internal Dispute Resolution",
        "blocks": [
          {
            "num": "24.1",
            "text": "If you believe that:",
            "items": [
              "(a) you were charged incorrectly",
              "(b) payment was duplicated",
              "(c) an Order was not delivered",
              "(d) a QR Code was faulty",
              "(e) Wallet Balance was deducted incorrectly",
              "(f) a refund was not processed correctly",
              "(g) another payment problem occurred,"
            ]
          },
          {
            "text": "you should contact us at info@esim-ex.com."
          },
          {
            "num": "24.2",
            "text": "Your complaint should include:",
            "items": [
              "(a) your Order reference",
              "(b) the email address used for the Order",
              "(c) the disputed amount",
              "(d) the transaction date",
              "(e) a description of the issue",
              "(f) the outcome requested",
              "(g) relevant receipts, screenshots, or error messages."
            ]
          },
          {
            "num": "24.3",
            "text": "We aim to acknowledge a payment complaint within 2 business days."
          },
          {
            "num": "24.4",
            "text": "We aim to provide a substantive response within 10 business days."
          },
          {
            "num": "24.5",
            "text": "Complex matters may take longer where information is required from:",
            "items": [
              "(a) a payment processor",
              "(b) a bank or card issuer",
              "(c) an eSIM supplier",
              "(d) a network provider",
              "(e) another relevant third party."
            ]
          },
          {
            "num": "24.6",
            "text": "Contacting us does not prevent you from exercising a legitimate right to contact your bank, payment provider, regulator, alternative dispute body, or court."
          }
        ]
      },
      {
        "title": "Chargebacks",
        "blocks": [
          {
            "num": "25.1",
            "text": "A chargeback is a payment dispute initiated through your bank, card issuer, or payment provider and handled under the relevant payment-scheme rules."
          },
          {
            "num": "25.2",
            "text": "Where reasonably practicable, we encourage you to contact us before initiating a chargeback so that we can investigate and attempt to resolve the matter."
          },
          {
            "num": "25.3",
            "text": "Contacting us first does not waive or limit your legitimate chargeback, payment-scheme, or statutory rights."
          },
          {
            "num": "25.4",
            "text": "If a chargeback is initiated:",
            "items": [
              "(a) we may pause an overlapping internal refund request",
              "(b) we may restrict disputed Wallet Balance or an undelivered Order while the matter is reviewed",
              "(c) we may provide supporting evidence to the payment provider",
              "(d) the relevant bank or payment provider will determine the outcome under its applicable rules."
            ]
          },
          {
            "num": "25.5",
            "text": "Evidence may include:",
            "items": [
              "(a) payment authorisation records",
              "(b) 3D Secure or authentication results",
              "(c) checkout confirmations",
              "(d) Order records",
              "(e) email delivery records",
              "(f) QR Code generation records",
              "(g) provisioning and activation status",
              "(h) usage information where available",
              "(i) Account activity",
              "(j) IP and security logs",
              "(k) support correspondence",
              "(l) refund or troubleshooting records."
            ]
          },
          {
            "num": "25.6",
            "text": "You may not receive both:",
            "items": [
              "(a) a direct refund from Esim-Ex",
              "and (b) reimbursement through a successful chargeback,"
            ]
          },
          {
            "text": "for the same payment."
          },
          {
            "num": "25.7",
            "text": "If duplicate reimbursement occurs, you must notify us, and we may recover or reverse the duplicate amount."
          },
          {
            "num": "25.8",
            "text": "We will not suspend or terminate an Account merely because a legitimate complaint or chargeback has been submitted."
          },
          {
            "num": "25.9",
            "text": "Where we reasonably identify:",
            "items": [
              "(a) fraud",
              "(b) deliberate misrepresentation",
              "(c) use of an eSIM followed by a false non-delivery claim",
              "(d) repeated unjustified chargebacks",
              "(e) use of stolen or unauthorised payment details",
              "(f) promotional or refund abuse,"
            ]
          },
          {
            "text": "we may:",
            "items": [
              "(a) restrict or suspend the Account",
              "(b) cancel pending Orders",
              "(c) reverse related Wallet Balance",
              "(d) refuse future Orders",
              "(e) terminate access",
              "(f) submit evidence to relevant providers",
              "(g) take lawful recovery action."
            ]
          },
          {
            "num": "25.10",
            "text": "Any action taken will be proportionate and will not restrict mandatory consumer rights."
          }
        ]
      },
      {
        "title": "Unauthorised Payments",
        "blocks": [
          {
            "num": "26.1",
            "text": "You must contact us promptly if you believe that a payment or Wallet Balance transaction was not authorised by you."
          },
          {
            "num": "26.2",
            "text": "You should also notify your bank, card issuer, or payment provider where appropriate."
          },
          {
            "num": "26.3",
            "text": "We may temporarily:",
            "items": [
              "(a) suspend the Account",
              "(b) hold Digital Delivery",
              "(c) restrict Wallet Balance",
              "(d) cancel pending Orders",
              "(e) request further verification,"
            ]
          },
          {
            "text": "while investigating suspected unauthorised activity."
          },
          {
            "num": "26.4",
            "text": "We may share relevant information with payment providers, fraud-prevention providers, or authorities where lawful and reasonably necessary."
          }
        ]
      },
      {
        "title": "Receipts and Invoices",
        "blocks": [
          {
            "num": "27.1",
            "text": "After successful payment, we may send an Order confirmation, receipt, invoice, or payment confirmation by email or make it available through your Account."
          },
          {
            "num": "27.2",
            "text": "You are responsible for providing accurate billing and contact information."
          },
          {
            "num": "27.3",
            "text": "If you require a copy of an available receipt or invoice, contact us at info@esim-ex.com."
          },
          {
            "num": "27.4",
            "text": "Transaction, payment, tax, refund, and accounting records may be retained as described in our Privacy Policy and as required by applicable law."
          }
        ]
      },
      {
        "title": "Business Purchases",
        "blocks": [
          {
            "num": "28.1",
            "text": "If you place an Order on behalf of a business or other legal entity, you confirm that you have authority to do so."
          },
          {
            "num": "28.2",
            "text": "Business customers are responsible for ensuring that:",
            "items": [
              "(a) billing details are correct",
              "(b) internal purchase approval has been obtained",
              "(c) any relevant tax or company information is accurate",
              "(d) the selected eSIM Plan is appropriate for the intended business use."
            ]
          },
          {
            "num": "28.3",
            "text": "Unless expressly agreed otherwise in writing, all Orders must be paid at checkout or using available Wallet Balance."
          },
          {
            "num": "28.4",
            "text": "We are not required to provide credit terms, deferred payment, or post-payment arrangements."
          }
        ]
      },
      {
        "title": "Changes to This Policy",
        "blocks": [
          {
            "num": "29.1",
            "text": "We may update this Payment Policy for legal, regulatory, technical, payment-provider, supplier-related, security, operational, or commercial reasons."
          },
          {
            "num": "29.2",
            "text": "The latest version will be published on the Service with an updated effective date."
          },
          {
            "num": "29.3",
            "text": "Changes apply prospectively unless otherwise required by law."
          },
          {
            "num": "29.4",
            "text": "Changes will not reduce mandatory rights already applying to completed consumer Orders."
          }
        ]
      },
      {
        "title": "Governing Law and Consumer Rights",
        "blocks": [
          {
            "num": "30.1",
            "text": "This Policy is governed by the laws of England and Wales."
          },
          {
            "num": "30.2",
            "text": "Nothing in this Policy limits mandatory rights available under applicable consumer law."
          },
          {
            "num": "30.3",
            "text": "Consumers resident in another country may also benefit from mandatory protections under the law of their habitual residence where those protections cannot be excluded."
          },
          {
            "num": "30.4",
            "text": "Applicable out-of-court dispute mechanisms may be available where required or permitted by law."
          }
        ]
      },
      {
        "title": "Contact Details",
        "blocks": [
          {
            "text": "For payment, billing, Wallet Balance, refund, dispute, or chargeback enquiries, contact:"
          },
          {
            "company": [
              "ESIMEX LTD",
              "Company number: 17173983",
              "Registered office: Dept 6750, 196 High Road, Wood Green, London, United Kingdom, N22 8HH",
              "Email: info@esim-ex.com",
              "Phone: +44 7447 196114",
              "Website: https://www.esim-ex.com"
            ]
          }
        ]
      }
    ]
  }
];

export function getPolicy(slug: string): PolicyDoc | undefined {
  return policies.find((p) => p.slug === slug);
}
