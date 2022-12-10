import Message from './Message'

const MessageApp = () => {
  return (
    <div className='mb-auto space-y-3 p-4'>
      <Message
        time='Today, 12:00PM'
        text='Are you gaming tonight? Please respond following example format: "yes @ 8:00PM" or simply "no".'
        response={false}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1, type: 'spring', stiffness: 20 }}
      />
      <Message
        text='Yes @ 7:30PM'
        response={true}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 3, type: 'spring', stiffness: 20 }}
      />
      <Message
        time='Today, 6:00PM'
        text='Tonight, 3 friends will be gaming at the average time of 7:45PM EST'
        response={false}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 5, type: 'spring', stiffness: 20 }}
      />
    </div>
  )
}

export default MessageApp
