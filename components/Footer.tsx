export default function Footer() {
  return (
    <footer className="relative py-16 px-6 border-t border-zinc-200/50">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <svg
                width="89"
                height="14"
                viewBox="0 0 89 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.5146 6.49555C14.5038 6.54665 14.5532 6.53891 14.5903 6.5513C14.7819 6.61788 15.0029 6.6411 15.1977 6.70459C17.1186 7.32395 17.8218 9.15727 17.1619 11.0231C16.5051 12.8781 14.666 13.4092 12.8671 13.5207H0.0168144C0.00445086 13.5192 -0.00327633 13.5068 0.00135999 13.4959L4.96222 0.0185446C4.96222 0.0185446 4.97149 0.00770569 4.97767 0.00770569L12.7466 0.0417708C12.7466 0.0417708 12.7466 0.0417708 12.7481 0.0417708C14.0138 0.171837 15.5083 0.489262 16.3104 1.56386C17.7322 3.46531 16.6797 5.86999 14.5115 6.49555H14.5146ZM7.85991 5.12831H10.7499C11.6756 5.12831 12.2505 4.05371 11.6787 3.32595C11.382 2.94659 10.9415 2.88466 10.4732 2.87227C9.88135 2.85678 9.27399 2.90324 8.68054 2.90633C8.67281 2.90633 8.66663 2.91098 8.66509 2.91717L7.84446 5.10508C7.83982 5.11592 7.8491 5.12831 7.85991 5.12831ZM5.8323 10.6097C5.82766 10.6205 5.83693 10.6329 5.84775 10.6329H10.6247C12.7157 10.7119 13.0062 8.12603 10.7762 7.97429H6.80902C6.80902 7.97429 6.79511 7.97893 6.79356 7.98513L5.8323 10.6097Z"
                  fill="#18181B"
                />
                <path
                  d="M23.809 0.00310516H18.8389V13.5176H23.809V0.00310516Z"
                  fill="#18181B"
                />
                <path
                  d="M31.0768 0.00310516L36.4457 7.8613L36.37 0.00310516H41.0372V13.5176H35.6683L30.4308 5.69662L30.4509 13.5176H25.8208V0.00310516H31.0768Z"
                  fill="#18181B"
                />
                <path
                  d="M47.9812 0.00310516V8.86777C47.9812 11.1672 52.3455 11.1192 52.3455 8.86777V0.00310516H57.3543V8.60144C57.005 13.2823 51.8433 14.4064 47.9812 13.6895C45.2072 13.1755 42.9091 11.6208 42.974 8.52557V0.00310516H47.9812Z"
                  fill="#18181B"
                />
                <path
                  d="M65.2837 13.5176L71.3727 0L77.0043 0.00774206L82.8893 13.5176H77.5019L76.7941 11.6255L71.3542 11.6379L70.6711 13.5176H65.2837ZM72.4174 8.62001H75.7942L74.1066 3.91284L72.4174 8.62001Z"
                  fill="#18181B"
                />
                <path
                  d="M89 0.00310516H83.9912V13.5176H89V0.00310516Z"
                  fill="#18181B"
                />
              </svg>
            </div>
            <p className="text-zinc-600 max-w-xs">
              숏폼 속 빈 공간, 브랜드 가치로 채우다
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-zinc-800 mb-4">Company</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#about"
                  className="text-zinc-500 hover:text-zinc-900 transition-colors text-sm"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-zinc-500 hover:text-zinc-900 transition-colors text-sm"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-zinc-500 hover:text-zinc-900 transition-colors text-sm"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-zinc-500 hover:text-zinc-900 transition-colors text-sm"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-zinc-800 mb-4">Legal</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-zinc-500 hover:text-zinc-900 transition-colors text-sm"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-zinc-500 hover:text-zinc-900 transition-colors text-sm"
                >
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-zinc-200/50 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-zinc-500 text-sm">
            © 2026 BINU AI. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {/* Instagram */}
            <a
              href="https://www.instagram.com/binu_ai/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full flex items-center justify-center text-zinc-500 hover:text-zinc-900 hover:bg-zinc-100 transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
            {/* YouTube */}
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full flex items-center justify-center text-zinc-500 hover:text-zinc-900 hover:bg-zinc-100 transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
