import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';
import { Loader2 } from 'lucide-react';

const formSchema = z.object({
  name: z.string().min(2, 'Nama harus minimal 2 karakter'),
  email: z.string().email('Email tidak valid'),
  phone: z.string().min(10, 'Nomor telepon harus minimal 10 digit'),
  message: z.string().min(10, 'Pesan harus minimal 10 karakter'),
});

function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data) => {
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // Store in localStorage
    const submissions = JSON.parse(localStorage.getItem('contactSubmissions') || '[]');
    submissions.push({
      ...data,
      timestamp: new Date().toISOString(),
    });
    localStorage.setItem('contactSubmissions', JSON.stringify(submissions));

    setIsSubmitting(false);
    toast.success('Pesan Anda telah terkirim. Kami akan segera menghubungi Anda.');
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div>
        <Label htmlFor="name" className="text-sm font-medium">
          Nama Lengkap
        </Label>
        <Input
          id="name"
          type="text"
          placeholder="Masukkan nama lengkap Anda"
          className="mt-2 text-foreground placeholder:text-muted-foreground"
          {...register('name')}
        />
        {errors.name && (
          <p className="text-sm text-destructive mt-1">{errors.name.message}</p>
        )}
      </div>

      <div>
        <Label htmlFor="email" className="text-sm font-medium">
          Email
        </Label>
        <Input
          id="email"
          type="email"
          placeholder="nama@email.com"
          className="mt-2 text-foreground placeholder:text-muted-foreground"
          {...register('email')}
        />
        {errors.email && (
          <p className="text-sm text-destructive mt-1">{errors.email.message}</p>
        )}
      </div>

      <div>
        <Label htmlFor="phone" className="text-sm font-medium">
          Nomor Telepon
        </Label>
        <Input
          id="phone"
          type="tel"
          placeholder="+62 XXX-XXXX-XXXX"
          className="mt-2 text-foreground placeholder:text-muted-foreground"
          {...register('phone')}
        />
        {errors.phone && (
          <p className="text-sm text-destructive mt-1">{errors.phone.message}</p>
        )}
      </div>

      <div>
        <Label htmlFor="message" className="text-sm font-medium">
          Pesan
        </Label>
        <Textarea
          id="message"
          placeholder="Ceritakan kebutuhan legalitas bisnis Anda..."
          rows={5}
          className="mt-2 text-foreground placeholder:text-muted-foreground"
          {...register('message')}
        />
        {errors.message && (
          <p className="text-sm text-destructive mt-1">{errors.message.message}</p>
        )}
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full gradient-blue text-white hover:opacity-90 transition-all duration-200 active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Mengirim...
          </>
        ) : (
          'Kirim Pesan'
        )}
      </Button>
    </form>
  );
}

export default ContactForm;