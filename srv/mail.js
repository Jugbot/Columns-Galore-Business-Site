import { createTransport } from 'nodemailer'

const transporter = createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  auth: {
    user: process.env.EMAIL_NAME,
    pass: process.env.EMAIL_PASSWORD
  }
})

export function sendQuoteMail (formdata) {
  return transporter.sendMail({
    to: process.env.EMAIL_NAME,
    subject: 'Quote Request',
    text:
      'I am looking for a ' +
      (formdata.part.Year ? formdata.part.Year + ' ' : '(unknown year) ') +
      (formdata.part.Manufacturer ? formdata.part.Manufacturer + ' ' : '(unknown manufacturer) ') +
      (formdata.part.Model ? formdata.part.Model + ' ' : '(unknown model) ') +
      (formdata.part.Transmission ? (formdata.part.Transmission) + ' ' : '(unknown transmission) ') +
      (formdata.part.Tilt ? (formdata.part.Tilt) + ' Wheel ' : '(unknown wheel tilt) ') +
      (formdata.part.Shift ? (formdata.part.Shift) + ' Shift ' : '(unknown shift) ') +
      (formdata.part.AdditionalOptions ? 'with ' + (formdata.part.AdditionalOptions) : '') +
      '\n\n' +
      'My contact information is as follows:\n' +
      [
        'Name',
        'Address',
        'ContactBy',
        'Phone',
        'Email'
      ].map(n => n + ': ' + formdata.contact[n]).join('\n')
  })
}
