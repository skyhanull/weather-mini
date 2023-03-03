import React from 'react';
import { Icon } from '@iconify/react';

const WeatherIcon = (weather: string) => {
  return (
    <div>
      {weather === 'Clouds' ? (
        <Icon icon="ic:round-cloud-queue" width="100" height="100" />
      ) : weather === 'Clear' ? (
        <Icon icon="ph:sun" width="100" height="100" />
      ) : weather === 'Snow' ? (
        <Icon icon="bi:cloud-snow" width="100" height="100" />
      ) : weather === 'Rain' ? (
        <Icon icon="carbon:rain" width="100" height="100" />
      ) : weather === 'Mist' ? (
        <Icon icon="ri:mist-fill" width="100" height="100" />
      ) : null}
    </div>
  );
};

export default WeatherIcon;
