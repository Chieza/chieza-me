import { useState } from "react";
import Modal from "../common/Modal";
import { HiUser, HiLockClosed } from "react-icons/hi";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import GradientButton from "../buttons/GradientButton";

export interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function LoginModal({ isOpen, onClose }: LoginModalProps) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSubmitted(false);
    // simulate async login
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1000);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} maxWidth="max-w-[440px]">
      <h2 className="text-3xl font-bold text-white mb-4">Login</h2>
      <p className="text-gray-300 mb-6">
        This is a password-protected area for <strong>recruiters only</strong>{" "}
        to check my challenges.
      </p>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Username */}
        <div>
          <label htmlFor="username" className="sr-only ">
            Username
          </label>
          <div className="relative">
            <HiUser className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              id="username"
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full bg-neutral-700 text-white placeholder-gray-500 rounded-lg py-3 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Password */}
        <div>
          <label htmlFor="password" className="sr-only">
            Password
          </label>
          <div className="relative">
            <HiLockClosed className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              id="password"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-neutral-700 text-white placeholder-gray-500 rounded-lg py-3 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          {submitted && (
            <p className="mt-2 text-sm text-red-500">
              User not found! Contact for help.
            </p>
          )}
        </div>

        {/* Divider + Submit */}
        <div>
          <div className="border-t border-neutral-700 mb-4" />
          <GradientButton
            type="submit"
            className="w-full flex items-center justify-center gap-2"
            disabled={loading}
          >
            {loading && (
              <AiOutlineLoading3Quarters className="animate-spin h-5 w-5" />
            )}
            {loading ? "Authenticating…" : "Login"}
          </GradientButton>
        </div>
      </form>
    </Modal>
  );
}
