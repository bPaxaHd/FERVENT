
import React from 'react';
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";

interface ContactFormData {
  name: string;
  phone: string;
  message: string;
  contactMethod: {
    phone: boolean;
    telegram: boolean;
    whatsapp: boolean;
  }
}

const ContactForm = () => {
  const { register, handleSubmit } = useForm<ContactFormData>();

  const onSubmit = (data: ContactFormData) => {
    console.log('Form data:', data);
    // Здесь будет логика отправки формы
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
          ИМЯ <span className="text-red-500">*</span>
        </label>
        <Input
          id="name"
          {...register("name", { required: true })}
          className="w-full"
        />
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
          ТЕЛЕФОН <span className="text-red-500">*</span>
        </label>
        <Input
          id="phone"
          {...register("phone", { required: true })}
          className="w-full"
        />
      </div>

      <div className="space-y-2">
        <p className="text-sm font-medium text-gray-700">Как с вами связаться?</p>
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <Checkbox id="phone" {...register("contactMethod.phone")} />
            <label htmlFor="phone" className="text-sm text-gray-600">Телефон</label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="telegram" {...register("contactMethod.telegram")} />
            <label htmlFor="telegram" className="text-sm text-gray-600">Telegram</label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="whatsapp" {...register("contactMethod.whatsapp")} />
            <label htmlFor="whatsapp" className="text-sm text-gray-600">WhatsApp</label>
          </div>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
          Напишите свой вопрос
        </label>
        <Textarea
          id="message"
          {...register("message")}
          className="w-full min-h-[150px]"
        />
      </div>

      <Button type="submit" className="w-full bg-black text-white hover:bg-gray-800">
        ОТПРАВИТЬ
      </Button>
    </form>
  );
};

export default ContactForm;
