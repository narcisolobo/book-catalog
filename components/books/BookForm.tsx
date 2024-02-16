'use client';

import { SubmitHandler, useForm } from 'react-hook-form';
import { BookData } from '@/types/types';

type Props = {
  buttonText: string;
  initialBook: BookData;
  onSubmit: SubmitHandler<BookData>;
};

function BookForm({ buttonText, initialBook, onSubmit }: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<BookData>({ defaultValues: initialBook });

  const watchTitle = watch('title');
  const watchIsAvailable = watch('isAvailable');

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="form-floating mb-3">
        <input
          className={`form-control ${errors.title ? 'is-invalid' : ''}`}
          type="text"
          id="title"
          placeholder="Title:"
          {...register('title', { required: 'Please enter book title.' })}
        />
        <label htmlFor="title">Title: {watchTitle}</label>
        <div className="invalid-feedback">{errors.title?.message}</div>
      </div>
      <div className="row mb-3">
        <div className="col-sm-8">
          <div className="form-floating">
            <input
              className={`form-control ${errors.author ? 'is-invalid' : ''}`}
              type="text"
              id="author"
              placeholder="Author:"
              {...register('author', { required: 'Please enter book author.' })}
            />
            <label htmlFor="author">Author:</label>
            <div className="invalid-feedback">{errors.author?.message}</div>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="form-floating">
            <input
              className={`form-control ${errors.pages ? 'is-invalid' : ''}`}
              type="number"
              id="pages"
              placeholder="Page Count:"
              {...register('pages', {
                required: 'Please enter page count.',
                min: {
                  value: 2,
                  message: 'Two page minimum.',
                },
              })}
            />
            <label htmlFor="pages">Page Count:</label>
            <div className="invalid-feedback">{errors.pages?.message}</div>
          </div>
        </div>
      </div>
      <div className="form-check form-switch">
        <input
          type="checkbox"
          id="isAvailable"
          role="switch"
          className={`form-check-input ${
            errors.isAvailable ? 'is-invalid' : ''
          }`}
          {...register('isAvailable')}
        />
        <label htmlFor="isAvailable" className="form-check-label">
          Is it available? {watchIsAvailable ? 'true' : 'false'}
        </label>
        <div className="invalid-feedback">{errors.isAvailable?.message}</div>
      </div>
      <div className="text-end">
        <button type="submit" className="btn btn-primary">
          {buttonText}
        </button>
      </div>
    </form>
  );
}

export default BookForm;
