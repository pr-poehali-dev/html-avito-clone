import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const categories = [
  { name: 'Электроника', icon: 'Smartphone', count: '12 345' },
  { name: 'Недвижимость', icon: 'Home', count: '8 921' },
  { name: 'Транспорт', icon: 'Car', count: '15 678' },
  { name: 'Работа', icon: 'Briefcase', count: '4 532' },
  { name: 'Услуги', icon: 'Wrench', count: '9 234' },
  { name: 'Мода', icon: 'ShoppingBag', count: '11 456' },
  { name: 'Хобби', icon: 'Palette', count: '6 789' },
  { name: 'Для дома', icon: 'Sofa', count: '7 890' },
];

const products = [
  {
    id: 1,
    title: 'iPhone 15 Pro Max 256GB',
    price: '119 990',
    image: 'https://images.unsplash.com/photo-1678685888221-cda773a3dcdb?w=400',
    location: 'Москва',
    time: '2 часа назад',
    favorite: false,
  },
  {
    id: 2,
    title: '2-комн. квартира, 65 м²',
    price: '12 500 000',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=400',
    location: 'Санкт-Петербург',
    time: '5 часов назад',
    favorite: false,
  },
  {
    id: 3,
    title: 'Toyota Camry 2021',
    price: '2 850 000',
    image: 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=400',
    location: 'Екатеринбург',
    time: '1 день назад',
    favorite: false,
  },
  {
    id: 4,
    title: 'MacBook Pro 14" M3',
    price: '189 990',
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400',
    location: 'Москва',
    time: '3 часа назад',
    favorite: true,
  },
  {
    id: 5,
    title: 'Диван угловой серый',
    price: '45 000',
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400',
    location: 'Казань',
    time: '6 часов назад',
    favorite: false,
  },
  {
    id: 6,
    title: 'Велосипед горный Trek',
    price: '78 500',
    image: 'https://images.unsplash.com/photo-1576435728678-68d0fbf94e91?w=400',
    location: 'Новосибирск',
    time: '4 часа назад',
    favorite: false,
  },
];

export default function Index() {
  const [searchQuery, setSearchQuery] = useState('');
  const [favorites, setFavorites] = useState<number[]>([4]);
  const [activeTab, setActiveTab] = useState('all');

  const toggleFavorite = (id: number) => {
    setFavorites(prev =>
      prev.includes(id) ? prev.filter(fav => fav !== id) : [...prev, id]
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-background">
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-card/80 border-b border-border/40 shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg">
                <Icon name="Store" className="text-white" size={24} />
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Маркет
              </h1>
            </div>

            <div className="flex-1 max-w-2xl">
              <div className="relative">
                <Icon
                  name="Search"
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground"
                  size={20}
                />
                <Input
                  placeholder="Поиск товаров и услуг..."
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                  className="pl-12 pr-4 h-12 rounded-2xl border-2 focus:border-primary transition-all"
                />
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-xl hover:bg-primary/10"
              >
                <Icon name="Heart" size={22} />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-xl hover:bg-primary/10"
              >
                <Icon name="Bell" size={22} />
              </Button>
              <Button className="rounded-xl bg-gradient-to-r from-primary to-secondary hover:shadow-lg transition-all">
                <Icon name="Plus" size={18} className="mr-2" />
                Разместить
              </Button>
              <Avatar className="w-10 h-10 border-2 border-primary/20">
                <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=user" />
                <AvatarFallback>U</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      </header>

      <section className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-6 animate-fade-in">Категории</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 animate-slide-up">
          {categories.map((cat, idx) => (
            <Card
              key={idx}
              className="group cursor-pointer hover:shadow-xl hover:-translate-y-1 transition-all duration-300 rounded-2xl border-2 hover:border-primary/50 overflow-hidden"
            >
              <CardContent className="p-6 text-center">
                <div className="w-14 h-14 mx-auto mb-3 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Icon name={cat.icon as any} className="text-primary" size={28} />
                </div>
                <h3 className="font-semibold text-sm mb-1">{cat.name}</h3>
                <p className="text-xs text-muted-foreground">{cat.count}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">Объявления</h2>
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="rounded-xl">
              <TabsTrigger value="all" className="rounded-lg">
                Все
              </TabsTrigger>
              <TabsTrigger value="new" className="rounded-lg">
                Новые
              </TabsTrigger>
              <TabsTrigger value="popular" className="rounded-lg">
                Популярные
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, idx) => (
            <Card
              key={product.id}
              className="group cursor-pointer hover:shadow-2xl transition-all duration-300 rounded-2xl border-2 hover:border-primary/30 overflow-hidden animate-scale-in"
              style={{ animationDelay: `${idx * 50}ms` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <Button
                  size="icon"
                  variant="secondary"
                  className="absolute top-3 right-3 rounded-full shadow-lg backdrop-blur-sm bg-white/90 hover:bg-white"
                  onClick={() => toggleFavorite(product.id)}
                >
                  <Icon
                    name="Heart"
                    size={18}
                    className={
                      favorites.includes(product.id)
                        ? 'fill-red-500 text-red-500'
                        : ''
                    }
                  />
                </Button>
                <Badge className="absolute bottom-3 left-3 rounded-lg bg-primary/90 backdrop-blur-sm">
                  {product.location}
                </Badge>
              </div>
              <CardContent className="p-5">
                <h3 className="font-semibold text-lg mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                  {product.title}
                </h3>
                <div className="flex items-center justify-between mb-2">
                  <p className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    {product.price} ₽
                  </p>
                </div>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Icon name="Clock" size={14} />
                  <span>{product.time}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="flex justify-center mt-10">
          <Button
            variant="outline"
            size="lg"
            className="rounded-xl border-2 hover:border-primary hover:bg-primary/5"
          >
            Показать ещё
            <Icon name="ChevronDown" size={18} className="ml-2" />
          </Button>
        </div>
      </section>

      <footer className="bg-card border-t mt-16">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-4">О сервисе</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    О нас
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Вакансии
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Помощь
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Пользователям</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Безопасность
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Правила
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Блог
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Бизнесу</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Реклама
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Партнёрам
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    API
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Мы в соцсетях</h3>
              <div className="flex gap-3">
                <Button
                  size="icon"
                  variant="outline"
                  className="rounded-xl hover:bg-primary/10"
                >
                  <Icon name="MessageCircle" size={20} />
                </Button>
                <Button
                  size="icon"
                  variant="outline"
                  className="rounded-xl hover:bg-primary/10"
                >
                  <Icon name="Send" size={20} />
                </Button>
                <Button
                  size="icon"
                  variant="outline"
                  className="rounded-xl hover:bg-primary/10"
                >
                  <Icon name="Youtube" size={20} />
                </Button>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
            © 2024 Маркет. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
}
