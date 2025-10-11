import { X } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'react-toastify';

type DeleteSubmissionModalProps = {
  isOpen: boolean;
  onClose: () => void;
  submission: {
    id: string;
    fullName: string;
    email: string;
  };
};

export default function DeleteSubmissionModal({
  isOpen,
  onClose,
  submission,
}: DeleteSubmissionModalProps) {
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleDelete = async () => {
    try {
      setLoading(true);
      const res = await fetch(
        `/api/private-seed/delete-submission?id=${submission.id}`,
        {
          method: 'DELETE',
        }
      );

      if (!res.ok) {
        toast.error('Failed to delete submission');
        return;
      }

      toast.success('Submission deleted successfully!');
      onClose();
      window.location.reload();
    } catch (err) {
      console.error(err);
      toast.error('Something went wrong while deleting submission');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
      <div className="bg-white rounded-2xl shadow-lg w-[400px] p-6 relative">
        <button
          className="absolute top-3 right-3 text-gray-400 hover:text-gray-600"
          onClick={onClose}
        >
          <X className="w-5 h-5" />
        </button>

        <h2 className="text-lg font-semibold text-gray-800 mb-2">
          Confirm Deletion
        </h2>
        <p className="text-sm text-gray-600 mb-4">
          Are you sure you want to delete this seeder submission?
        </p>

        <div className="bg-gray-100 p-3 rounded-xl mb-4">
          <p>
            <strong>Name:</strong> {submission.fullName}
          </p>
          <p>
            <strong>Email:</strong> {submission.email}
          </p>
        </div>

        <div className="flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-200 rounded-xl hover:bg-gray-300"
            disabled={loading}
          >
            Cancel
          </button>
          <button
            onClick={handleDelete}
            className="px-4 py-2 bg-red-600 text-white rounded-xl hover:bg-red-700"
            disabled={loading}
          >
            {loading ? 'Deleting...' : 'Delete'}
          </button>
        </div>
      </div>
    </div>
  );
}
