// Alphanumeric, spaces, dashes and underscores
export const ALLOWED_CHARACTERS = '/^[w-s]+$/gi';

export const isCorrectKey = (char: string, key: string) => key === char;

export const textBreaker = (text: string): string[] => {
  return text.replace(ALLOWED_CHARACTERS, '').toLowerCase().split(' ');
}

export const wordBreaker = (word: string): string[] => word.split('');

export const getRandomInt = (max: number) => Math.floor(Math.random() * max);

export const TEST_TEXT = `WAI-ARIA is a technical specification that provides a framework to improve the accessibility and interoperability of web content and applications. This document is primarily for developers creating custom widgets and other web application components. Please see the WAI-ARIA Overview for links to related documents for other audiences, such as WAI-ARIA Authoring Practices [wai-aria-practices-1.1] that introduces developers to the accessibility problems that WAI-ARIA is intended to solve, the fundamental concepts, and the technical approach of WAI-ARIA.

This draft currently handles two aspects of roles: user interface functionality and structural relationships. For more information and use cases, see [wai-aria-practices-1.1] for the use of roles in making interactive content accessible.

The role taxonomy is designed in part to support the common roles found in platform accessibility APIs. Reference to roles found in this taxonomy by dynamic web content may be used to support interoperability with assistive technologies.

The schema to support this standard has been designed to be extensible so that custom roles can be created by extending base roles. This allows user agents to support at least the base role, and user agents that support the custom role can provide enhanced access. Note that much of this could be formalized in [xmlschema-2]. However, being able to define similarities between roles, such as baseConcepts and more descriptive definitions, would not be available in XSD.

WAI-ARIA 1.1 is a member of the WAI-ARIA 1.1 suite that defines how to expose semantics of WAI-ARIA and other web content languages to accessibility APIs.

1.1 Rich Internet Application Accessibility§
The domain of web accessibility defines how to make web content usable by persons with disabilities. Persons with certain types of disabilities use assistive technologies (AT) to interact with content. Assistive technologies can transform the presentation of content into a format more suitable to the user, and can allow the user to interact in different ways. For example, the user may need to, or choose to, interact with a slider widget via arrow keys, instead of dragging and dropping with a mouse. In order to accomplish this effectively, the software needs to understand the semantics of the content. Semantics is the science of meaning; in this case, used to assign roles, states, and properties that apply to user interface and content elements as a human would understand. For instance, if a paragraph is semantically identified as such, assistive technologies can interact with it as a unit separable from the rest of the content, knowing the exact boundaries of that paragraph. An adjustable range slider or collapsible list (a.k.a. a tree widget) are more complex examples, in which various parts of the widget have semantics that need to be properly identified for assistive technologies to support effective interaction.

New technologies often overlook semantics required for accessibility, and new authoring practices often misuse the intended semantics of those technologies. Elements that have one defined meaning in the language are used with a different meaning intended to be understood by the user.

For example, web application developers create collapsible tree widgets in HTML using CSS and JavaScript even though HTML has no semantic tree element. To a non-disabled user, it may look and act like a collapsible tree widget, but without appropriate semantics, the tree widget may not be perceivable to, or operable by, a person with a disability because assistive technologies may not recognize the role. Similarly, web application developers create interactive button widgets in SVG using JavaScript even though SVG has no semantic button element. To a non-disabled user, it may look and act like a button widget, but without appropriate semantics, the button widget may not be perceivable to, or operable by, a person with a disability because assistive technologies may not recognize the role.

The incorporation of WAI-ARIA is a way for an author to provide proper semantics for custom widgets to make these widgets accessible, usable, and interoperable with assistive technologies. This specification identifies the types of widgets and structures that are commonly recognized by accessibility products, by providing an ontology of corresponding roles that can be attached to content. This allows elements with a given role to be understood as a particular widget or structural type regardless of any semantics inherited from the implementing host language. Roles are a common property of platform accessibility APIs which assistive technologies use to provide the user with effective presentation and interaction.

This role taxonomy includes interaction widgets and elements denoting document structure. The role taxonomy describes inheritance and details the attributes each role supports. Information about mapping of roles to accessibility APIs is provided by the Core Accessibility API Mappings 1.1 [core-aam-1.1].

Roles are element types and will not change with time or user actions. Role information is used by assistive technologies, through interaction with the user agent, to provide normal processing of the specified element type.

States and properties are used to declare important attributes of an element that affect and describe interaction. They enable the user agent and operating system to properly handle the element even when the attributes are dynamically changed by client-side scripts. For example, alternative input and output technology, such as screen readers and speech dictation software, need to be able to recognize and effectively manipulate and communicate various interaction states (e.g., disabled, checked) to the user.

While it is possible for assistive technologies to access these properties directly through the Document Object Model [dom], the preferred mechanism is for the user agent to map the states and properties to the accessibility API of the operating system. See the Core Accessibility API Mappings 1.1 [core-aam-1.1] and the Accessible Name and Description: Computation and API Mappings 1.1 [accname-aam-1.1] for details.

Figure 1.0 illustrates the relationship between user agents (e.g., browsers), accessibility APIs, and assistive technologies. It describes the "contract" provided by the user agent to assistive technologies, which includes typical accessibility information found in the accessibility API for many of our accessible platforms for GUIs (role, state, selection, event notification, relationship information, and descriptions). The DOM, usually HTML, acts as the data model and view in a typical model-view-controller relationship, and JavaScript acts as the controller by manipulating the style and content of the displayed data. The user agent conveys relevant information to the operating system's accessibility API, which can be used by any assistive technologies, such as screen readers.`

