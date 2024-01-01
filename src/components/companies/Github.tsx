import React from 'react'

const GithubIcon = ({ size }: { size?: number }) => {
  return (
    <svg
      width={size ?? 100}
      height={size ?? 100}
      viewBox='0 0 102 100'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <g clip-path='url(#clip0_34_349)'>
        <path
          fill-rule='evenodd'
          clip-rule='evenodd'
          d='M50.848 0.000488281C22.7304 0.000488281 0 22.8189 0 51.0485C0 73.6139 14.5641 92.715 34.7684 99.4755C37.2945 99.9837 38.2198 98.3771 38.2198 97.0256C38.2198 95.8422 38.1365 91.7857 38.1365 87.5591C23.9918 90.6022 21.0463 81.4738 21.0463 81.4738C18.7732 75.5576 15.4051 74.0371 15.4051 74.0371C10.7756 70.9099 15.7423 70.9099 15.7423 70.9099C20.8777 71.248 23.5724 76.1498 23.5724 76.1498C28.1176 83.9247 35.4419 81.7279 38.3884 80.3754C38.8089 77.0792 40.1568 74.7973 41.5879 73.5299C30.3065 72.3464 18.437 67.9518 18.437 48.3435C18.437 42.7654 20.4562 38.2017 23.6557 34.6524C23.1509 33.3849 21.3825 28.1439 24.1615 21.1293C24.1615 21.1293 28.4549 19.7768 38.1355 26.3693C42.2801 25.2519 46.5544 24.6834 50.848 24.6787C55.1414 24.6787 59.518 25.2709 63.5595 26.3693C73.2412 19.7768 77.5345 21.1293 77.5345 21.1293C80.3135 28.1439 78.5441 33.3849 78.0393 34.6524C81.3231 38.2017 83.259 42.7654 83.259 48.3435C83.259 67.9518 71.3895 72.2614 60.0238 73.5299C61.8765 75.1355 63.4752 78.1776 63.4752 82.9954C63.4752 89.8409 63.3919 95.335 63.3919 97.0246C63.3919 98.3771 64.3182 99.9837 66.8433 99.4765C87.0476 92.714 101.612 73.6139 101.612 51.0485C101.695 22.8189 78.8813 0.000488281 50.848 0.000488281Z'
          fill='white'
        />
      </g>
      <defs>
        <clipPath id='clip0_34_349'>
          <rect
            width='102'
            height='99.5714'
            fill='white'
            transform='translate(0 0.000488281)'
          />
        </clipPath>
      </defs>
    </svg>
  )
}

export default GithubIcon
