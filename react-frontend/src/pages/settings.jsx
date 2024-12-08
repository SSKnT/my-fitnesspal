import React from "react";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

const Settings= () => {
  return (
    <div className="min-h-screen bg-darkBg text-gray-200 p-6 flex flex-col justify-between">
      {/* Header */}
      <header className="text-center mb-8">
        <h1 className="text-4xl font-semibold text-gray-100">Settings</h1>
        <p className="text-sm text-gray-400 mt-1">
          Customize your experience and manage your account.
        </p>
      </header>

      {/* Content Sections */}
      <main className="space-y-6 flex-grow">
        {/* About This App */}
        <section className="bg-gray-800 p-4 rounded-lg shadow-lg">
            <h2 className="text-2xl font-medium">About This App</h2>
            <p className="mt-2 text-gray-400">
                This app helps you track your fitness goals with personalized tools designed to keep you motivated.
            </p>
            <div className="mt-4 flex items-center space-x-4">
                <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 2a10 10 0 100 20 10 10 0 000-20z"></path>
                </svg>
                <p className="text-gray-400">
                    Track your workouts and monitor your progress over time.
                </p>
            </div>
            <div className="mt-4 flex items-center space-x-4">
                <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <p className="text-gray-400">
                    Set and achieve your fitness goals with ease.
                </p>
            </div>
            <div className="mt-4 flex items-center space-x-4">
                <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 2a10 10 0 100 20 10 10 0 000-20z"></path>
                </svg>
                <p className="text-gray-400">
                    Get reminders to stay on track with your fitness routine.
                </p>
            </div>
        </section>

        {/* FAQ Section */}
                <section className="bg-gray-800 p-4 rounded-lg shadow-lg">
                    <h2 className="text-2xl font-medium">FAQ</h2>
                    <Accordion type="single" collapsible>
                        <AccordionItem value="faq-1">
                            <AccordionTrigger className="text-gray-300 hover:text-gray-100">How do I reset my password?</AccordionTrigger>
                            <AccordionContent className="text-gray-400">
                                Go to account settings and click "Reset Password." Follow the on-screen instructions.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="faq-2">
                            <AccordionTrigger className="text-gray-300 hover:text-gray-100">Is there a subscription fee?</AccordionTrigger>
                            <AccordionContent className="text-gray-400">
                                The app is free to use. Premium features may be introduced later.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="faq-3">
                            <AccordionTrigger className="text-gray-300 hover:text-gray-100">How do I track my workouts?</AccordionTrigger>
                            <AccordionContent className="text-gray-400">
                                You can track your workouts by navigating to the "Workouts" section and logging your activities.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="faq-4">
                            <AccordionTrigger className="text-gray-300 hover:text-gray-100">Can I sync data with other fitness apps?</AccordionTrigger>
                            <AccordionContent className="text-gray-400">
                                Yes, you can sync data with other fitness apps by going to the "Settings" and selecting "Sync Data."
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="faq-5">
                            <AccordionTrigger className="text-gray-300 hover:text-gray-100">How do I contact support?</AccordionTrigger>
                            <AccordionContent className="text-gray-400">
                                You can contact support by navigating to the "Help" section and clicking on "Contact Support."
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </section>
        

        {/* Other Settings */}
        <section className="bg-gray-800 p-4 rounded-lg shadow-lg">
          <h2 className="text-2xl font-medium">Other Settings</h2>
          <ul className="mt-4 space-y-2">
            <li>
              <button className="w-full text-left bg-gray-700 hover:bg-gray-600 text-gray-300 px-4 py-3 rounded-lg">
                Notifications
              </button>
            </li>
            <li>
              <button className="w-full text-left bg-gray-700 hover:bg-gray-600 text-gray-300 px-4 py-3 rounded-lg">
                Privacy & Security
              </button>
            </li>
          </ul>
        </section>
      </main>

      {/* Log Out */}
      <footer className="flex mt-8 w-full justify-center">
        <button className="w-[30%] bg-accentBackground text-white px-6 py-3 rounded-lg text-lg font-medium hover:opacity-90">
          Log Out
        </button>
      </footer>
    </div>
  );
};

export default Settings;
