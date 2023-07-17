import { GoKebabHorizontal } from "react-icons/go";
function Comment({ comment }) {
  return (
    <div>
      <label htmlFor="chat" className="sr-only">
        Your message
      </label>
      <div className="flex items-center px-3 py-2 rounded-lg bg-gray-50 dark:bg-gray-700">
        <div className="flex flex-col items-center justify-center h-full">
          <img
            className="object-cover w-[3rem] h-[2rem] rounded-full"
            src={comment.owner.image}
            alt=""
          />
        </div>
        <textarea
          id="chat"
          rows="1"
          value={comment.text}
          disabled
          className="block resize-none mx-4 p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Your message..."
        ></textarea>
        <div className="grow flex justify-end">
          <button className="cursor-pointer">
            <GoKebabHorizontal className="text-white" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Comment;
