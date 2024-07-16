import emailjs from '@emailjs/browser';

interface EmailParams {
  [key: string]: string;
}

const sendEmail = async (templateId: string, templateParams: EmailParams) => {
  const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
  
  if (!serviceId) {
    console.error('Service ID is not defined');
    return false;
  }

  try {
    const response = await emailjs.send(serviceId, templateId, templateParams);
    return response.status === 200;
  } catch (error) {
    console.error(`Error sending email with template ID ${templateId}:`, error);
    return false;
  }
};

export default sendEmail;
