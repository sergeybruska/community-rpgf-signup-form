import { Field, type FieldProps } from 'formik';
import { type FC } from 'react';

import { UploadImage } from '@/shared/ui/Upload';

type UploadImageFieldProps = {
  name: string;
  label: string;
  className?: string;
  disabled?: boolean;
};

export const UploadImageField: FC<UploadImageFieldProps> = (props) => {
  const { name, label, className, disabled } = props;

  return (
    <Field name={name}>
      {({ form: { setFieldValue, values }, meta }: FieldProps) => (
        <div className={className}>
          <UploadImage
            label={label}
            file={values[name]}
            onClick={(value) => setFieldValue(name, value)}
            removeImage={() => setFieldValue(name, null)}
            disabled={disabled}
          />
          {meta.touched && meta.error && (
            <span className='text-xs text-red-500'>{meta.error}</span>
          )}
        </div>
      )}
    </Field>
  );
};
