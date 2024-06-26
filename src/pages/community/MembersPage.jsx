import React, { useEffect } from 'react';
import ModelAsideLeft from '@/layouts/ModelAsideLeft';
import ModelMainPro from '@/layouts/ModelMainPro';
import MembersGrid from '@/components/MembersGrid';
import Select from 'react-select';
import { useMembers } from '@/context/MembersContext';

export default function MembersPage() {
  const { selectFilter, onChangeSelectFilter, onChangeSpecialityFilter, onChangeLevelFilter, filter } = useMembers();
  useEffect(() => {
    
  }, [selectFilter, filter]);

  return (
    <>
      <ModelAsideLeft id='members' className='community' title='Filtro'>
        <div className='select-filter'>
          <Select
            styles={colourStyles}
            options={optionsFilter}
            id='category'
            placeholder='Tipo de Filtro'
            className='react-select-container'
            classNamePrefix='react-select'
            onChange={onChangeSelectFilter}
          />
        </div>
        <hr />
        <div className='filter-buttons'>
          {selectFilter == 'level' ? (
            <>
              {levelFilterButtons.map(({ value, level, points }, index) => (
                <FilterButton
                  key={index}
                  value={value}
                  onClick={() =>  onChangeLevelFilter(value)}
                  level={level}
                  points={points}
                />
              ))}
            </>
          ) : (
            <>
              {specialityFilterButtons.map(({ value, speciality }, index) => (
                <FilterButton
                  key={index}
                  value={value}
                  onClick={onChangeSpecialityFilter}
                  speciality={speciality}
                />
              ))}
            </>
          )}
        </div>
      </ModelAsideLeft>
      <ModelMainPro id='members' title='Miembros de la comunidad'>
        <MembersGrid />
      </ModelMainPro>
    </>
  );
}

const specialityFilterButtons = [
  { value: 'admin', speciality: 'Administradores' },
  { value: 'ventas', speciality: 'Ventas' },
  { value: 'seo', speciality: 'SEO' },
  { value: 'arquitectura', speciality: 'Arquitectura' },
  { value: 'diseño', speciality: 'Diseño' },
  { value: 'programación', speciality: 'Programación' },
  { value: 'marketing', speciality: 'Marketing' },
  { value: 'ia', speciality: 'IA' },
  { value: 'fiscalidad', speciality: 'Fiscalidad' },
];

const levelFilterButtons = [
  { value: '1', level: 'Nvl 1', points: '0 pts' },
  { value: '2', level: 'Nvl 2', points: '5 pts' },
  { value: '3', level: 'Nvl 3', points: '20 pts' },
  { value: '4', level: 'Nvl 4', points: '65 pts' },
  { value: '5', level: 'Nvl 5', points: '155 pts' },
  { value: '6', level: 'Nvl 6', points: '515 pts' },
  { value: '7', level: 'Nvl 7', points: '2.015 pts' },
  { value: '8', level: 'Nvl 8', points: '8.015 pts' },
  { value: '9', level: 'Nvl 9', points: '33.015 pts' },
  { value: '10', level: 'Final Boss', points: '1M pts' },
];

const optionsFilter = [
  { value: 'speciality', label: 'Especialidad' },
  { value: 'level', label: 'Nivel' },
];

const colourStyles = {
  control: styles => ({ ...styles, backgroundColor: '#1a1e23' }),
  option: styles => ({
    ...styles,
    backgroundColor: '#1a1e23',
    ':active': { ...styles[':active'], backgroundColor: '#565656de' },
  }),
  multiValue: styles => ({ ...styles, backgroundColor: '#f6921b' }),
  multiValueLabel: styles => ({ ...styles, color: '#111822' }),
};

function FilterButton({ value, onClick, speciality, level, points }) {
  return (
    <button value={value} onClick={onClick}>
      {level ? (
        <>
          {level}
          <span className='pts'>&nbsp;&#8226;&nbsp; {points} </span>{' '}
        </>
      ) : (
        <>{speciality}</>
      )}
    </button>
  );
}
